import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { Plugins, NetworkStatus, PluginListenerHandle } from "@capacitor/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { ModalController } from "@ionic/angular";
import { InstructionPage } from "../../modal/instruction/instruction.page";
import * as firebsase from "firebase";
const { Network } = Plugins;
@Component({
  selector: "app-add-activie-modal",
  templateUrl: "./add-activie-modal.page.html",
  styleUrls: ["./add-activie-modal.page.scss"],
})
export class AddActivieModalPage implements OnInit {
  ionicForm: FormGroup;
  // defaultDate = "1987-06-30";
  isSubmitted = false;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  activitiesTab: any;
  constructor(
    public formBuilder: FormBuilder,
    public activitiService: ActivitiesApiService,
    private database: AngularFireDatabase,
    public modalController: ModalController
  ) {
    this.getStatus();
    this.getActivities();
  }

  async ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      description: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(1000),
        ],
      ],
      superficie: [
        "",
        [
          // Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
          // Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      // dob: [this.defaultDate],
      // mobile: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
      coutmaindoeuvre: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1000),
          //  Validators.pattern("^[0-9]+$"),
        ],
      ],
      frequence: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1000),
        ],
      ],
      periode: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(1000),
        ],
      ],
      besoinMateriel: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1000),
        ],
      ],
      coutMateriel: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1000),
        ],
      ],
      executant: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1000),
        ],
      ],
    });
  }
  async getStatus() {
    console.log(status);
    console.log("hello status");
    this.networkListener = Network.addListener(
      "networkStatusChange",
      (status) => {
        console.log(status);
        this.networkStatus = status;
      }
    );
    this.networkStatus = await Network.getStatus();
  }
  ngOnDestroy() {
    this.networkListener.remove();
  }
  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get("dob").setValue(date, {
      onlyself: true,
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log("Please provide all the required values!");
      return false;
    } else {
      console.log(this.ionicForm.value);
      let emp = this.ionicForm.value;
      this.activitiService.postActivitie(this.ionicForm.value).subscribe(
        (result) => {
          console.log(result["activitie"]);
          this.isSubmitted = false;
          this.ionicForm.reset();
          this.getActivities();
          this.activitiService
            .postActivitieToFirebase(result["activitie"])
            .then((res) => {
              console.log(res);
              this.updateActivitiesStatus({
                id: result["activitie"]["_id"],
                status: true,
              });
            })
            .catch((err) => {
              console.log(err);
              this.updateActivitiesStatus({
                id: result["activitie"]["_id"],
                status: false,
              });
            });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  getActivities() {
    this.activitiService.getLastTenActivitie().subscribe((data) => {
      console.log(data);

      this.activitiesTab = data;
      // this.activitiesTab = this.activitiesTab.reverse();
    });
  }
  updateActivitiesStatus(data) {
    this.activitiService
      .upadteActivitieFirebaseStatus(data)
      .subscribe((data) => {
        console.log(data);
      });
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
