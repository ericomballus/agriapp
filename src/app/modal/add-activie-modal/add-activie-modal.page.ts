import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { Plugins, NetworkStatus, PluginListenerHandle } from "@capacitor/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { ModalController } from "@ionic/angular";
import { InstructionPage } from "../../modal/instruction/instruction.page";
import * as firebsase from "firebase";
import { MaterielService } from "src/app/services/materiel.service";
import { NotificationService } from "src/app/services/notification.service";
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
  materieList: any[] = [];
  nameList: any[] = [];
  name: any;
  nameKey: any;
  tab: any[] = [];
  besoinMateriel = "";
  quantity = 0;
  choixMateriel: any;
  isDisabled: boolean = true;
  public disabled = false;
  constructor(
    public formBuilder: FormBuilder,
    public activitiService: ActivitiesApiService,
    private database: AngularFireDatabase,
    public modalController: ModalController,
    public materielService: MaterielService,
    public notif: NotificationService
  ) {
    this.getStatus();
    this.getActivitieName();
    this.getMateriel();
  }

  async ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      /* name: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],*/
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
      /*  besoinMateriel: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1000),
        ],
      ],*/
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
      emp["created"] = Date.now();
      if (this.tab.length) {
        emp["materielList"] = this.tab;
        emp["name"] = this.name;
        emp["nameKey"] = this.nameKey;
        this.tab.forEach((materiel) => {
          this.besoinMateriel =
            this.besoinMateriel + "," + materiel.qty + "" + materiel.name;
        });
      }
      emp["besoinMateriel"] = this.besoinMateriel;

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
          this.activitiService
            .postActivitieToFirebase(emp)
            .then((res) => {
              console.log(res);
              this.notif.presentMessage("l'activité a été enregistré!!!");
              this.ionicForm.reset();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
    }
  }
  getActivities() {
    this.activitiService.getLastTenActivitie().subscribe((data) => {
      console.log(data);
      this.activitiesTab = data;
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
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  selectEvent(ev) {
    console.log(ev.detail.value);
    let tab = ev.detail.value;
    this.choixMateriel = ev.detail.value;
    this.isDisabled = false;
    /* tab.forEach((materiel) => {
      this.besoinMateriel = this.besoinMateriel + "," + materiel.name;
    }); */
  }

  selectNameEvent(ev) {
    console.log(ev.detail.value);
    this.name = ev.detail.value.name;
    this.nameKey = ev.detail.value.key;
    this.isDisabled = false;
    /* tab.forEach((materiel) => {
      this.besoinMateriel = this.besoinMateriel + "," + materiel.name;
    }); */
  }

  getMateriel() {
    this.materielService.getMateriel().subscribe(
      (data: Array<any>) => {
        console.log(data);

        this.materieList = data;
        // this.getEquipementFromFirebase();
      },
      (err) => {
        // this.getEquipementFromFirebase();
      }
    );
  }

  getActivitieName() {
    this.materielService.getActivieNames().subscribe(
      (data: Array<any>) => {
        console.log(data);

        this.nameList = data;
        // this.getEquipementFromFirebase();
      },
      (err) => {
        // this.getEquipementFromFirebase();
      }
    );
  }

  getEquipementFromFirebase() {
    let storage = JSON.parse(localStorage.getItem("equipement"));
    if (Array.isArray(storage)) {
      this.materieList = storage;
    }
    /* this.database
      .list("/agriMatriels", (ref) =>
        ref.orderByChild("agriMatriels").limitToLast(20)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        let tab = [];
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          console.log(a);
          tab.push(a);
        });
        this.materieList = tab;
      }); */
  }

  addQuantity(ev) {
    this.quantity = parseInt(ev.detail.value);
    this.disabled = true;
    this.choixMateriel["qty"] = this.quantity;
  }
  addMateriel() {
    this.tab.push(this.choixMateriel);
    this.disabled = false;
    this.choixMateriel = null;
    this.isDisabled = true;
  }
}
