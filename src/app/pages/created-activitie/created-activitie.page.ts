import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Activities } from "../../models/activities.model";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { Plugins, NetworkStatus, PluginListenerHandle } from "@capacitor/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { ModalController } from "@ionic/angular";
import { InstructionPage } from "../../modal/instruction/instruction.page";
import * as firebsase from "firebase";
import { AddActivieModalPage } from "src/app/modal/add-activie-modal/add-activie-modal.page";
import { Router } from "@angular/router";
const { Network } = Plugins;
@Component({
  selector: "app-created-activitie",
  templateUrl: "./created-activitie.page.html",
  styleUrls: ["./created-activitie.page.scss"],
})
export class CreatedActivitiePage implements OnInit, OnDestroy {
  ionicForm: FormGroup;
  // defaultDate = "1987-06-30";
  isSubmitted = false;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  activitiesTab = [];
  constructor(
    public formBuilder: FormBuilder,
    public activitiService: ActivitiesApiService,
    private database: AngularFireDatabase,
    public modalController: ModalController,
    public router: Router
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
          /*  this.activitiService
            .postActivitieToFirebase(result)
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
            }); */
        },
        (err) => {
          console.log(err);
        }
      );
      /* let employe = new Employe(
        emp.name,
        emp.poste,
        emp.email,
        emp.dob,
        emp.mobile
      ); */
      // console.log(employe);
    }
  }
  getActivities() {
    this.activitiService.getLastTenActivitie().subscribe(
      (data: Array<any>) => {
        console.log(data);

        this.activitiesTab = data;
        // this.activitiesTab = this.activitiesTab.reverse();
        this.getActivityFromFirebase();
      },
      (err) => {
        this.getActivityFromFirebase();
      }
    );
  }
  updateActivitiesStatus(data) {
    this.activitiService
      .upadteActivitieFirebaseStatus(data)
      .subscribe((data) => {
        console.log(data);
      });
  }

  async presentModal(row) {
    console.log(row);
    this.activitiService.setData(row)
    this.router.navigateByUrl("instruction")
   /* const modal = await this.modalController.create({
      component: InstructionPage,
      cssClass: "my-custom-class",
      componentProps: {
        firstName: row,
        lastName: "Adams",
        middleInitial: "N",
      },
    });
    return await modal.present();*/
  }

  async createActivitie() {
    this.router.navigateByUrl("add-activie-modal");
  
  }

  getActivityFromFirebase() {
  /*  this.database
      .list("/agriActivities", (ref) =>
        ref.orderByChild("agriActivities").limitToLast(20)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        let tab = [];
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          tab.push(a);
        });
        if (this.activitiesTab.length) {
          tab.forEach((act) => {
            this.activitiesTab.forEach((elt) => {
              if (elt._id == act._id) {
                this.remplaceActivitie(act);
              }
            });
          });
        } else {
          this.activitiesTab = tab;
        }
      });*/
  }
  remplaceActivitie(act) {
    let index = this.activitiesTab.findIndex((elt) => {
      return elt._id == act._id;
    });
    if (index >= 0) {
      console.log("existe");
      this.activitiesTab.splice(index, 1, act);
    }
  }
}
