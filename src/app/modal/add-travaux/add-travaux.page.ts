import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { Plugins, NetworkStatus, PluginListenerHandle } from "@capacitor/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { AlertController, ModalController } from "@ionic/angular";
import { InstructionPage } from "../../modal/instruction/instruction.page";
import * as firebsase from "firebase";
import { MaterielService } from "src/app/services/materiel.service";
import { NotificationService } from "src/app/services/notification.service";
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";
import { ListActivitiesPage } from "../list-activities/list-activities.page";
import { ListCreatedActivitiesPage } from "../list-created-activities/list-created-activities.page";
import { TravauxApiService } from "src/app/services/travaux-api.service";
import { ProjetApiService } from "src/app/services/projet-api.service";
import { TravauxBeforeSavePage } from "../travaux-before-save/travaux-before-save.page";
import { Router } from "@angular/router";
import { AddActivieModalPage } from "../add-activie-modal/add-activie-modal.page";
import { SelectEmployePage } from "../select-employe/select-employe.page";
const { Network } = Plugins;

@Component({
  selector: "app-add-travaux",
  templateUrl: "./add-travaux.page.html",
  styleUrls: ["./add-travaux.page.scss"],
})
export class AddTravauxPage implements OnInit {
  isSubmitted = false;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  activitiesTab: any;
  activitiesList = [];
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
  customAlertOptions: any = {
    cssClass: "my-custom-class",
  };
  model: NgbDateStruct;
  date: { year: number; month: number };
  model2: NgbDateStruct;
  date2: { year: number; month: number };
  activitieName = "";
  travailName = "";
  ionicForm: FormGroup;
  projet: any;
  maindeouvre;
  tabTravaux = [];
  displayForm = true;
  add = false;
  constructor(
    public formBuilder: FormBuilder,
    public activitiService: ActivitiesApiService,
    private database: AngularFireDatabase,
    public modalController: ModalController,
    public materielService: MaterielService,
    public notif: NotificationService,
    private calendar: NgbCalendar,
    private activitiList: ActivitiesApiService,
    private travauxService: TravauxApiService,
    private projetService: ProjetApiService,
    public router: Router,
    public alertController: AlertController
  ) {
    this.getStatus();
    //this.getActivitieName();
    this.getAllActivities();
    this.projet = this.projetService.getProjet();
    if (this.projet["add"]) {
      this.add = true;
    }
    // this.getMateriel();
  }

  async ngOnInit() {
    this.model = this.calendar.getToday();
    this.model2 = this.calendar.getToday();
    this.ionicForm = this.formBuilder.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(1000),
        ],
      ],
      description: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10000),
        ],
      ],
      /* executant: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1000),
        ],
      ],*/
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
  getDuration(milli) {
    let minutes = Math.floor(milli / 60000);
    let hours = Math.round(minutes / 60);
    let days = Math.round(hours / 24);
    return days;
    // return { hours: hours, minutes: minutes, day: days };
  }
  submitForm() {
    let day2 = this.model2.day + 1;
    let day1 = this.model.day;
    let debut = new Date(
      this.model.year + "-" + this.model.month + "-" + day1
    ).getTime();
    let fin = new Date(
      this.model2.year + "-" + this.model2.month + "-" + day2
    ).getTime();
    console.log(new Date(Date.now()).getTime());
    let today = new Date(Date.now()).getTime();
    let start = debut - today;
    let remaining = fin - today;
    let res = this.getDuration(start);
    let res2 = this.getDuration(remaining);
    console.log(res + 1);
    console.log(res2 + 1);

    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log("Please provide all the required values!");
      this.notif.presentAlert(
        `veillez fournir  le nom et la description du travail`
      );
      return false;
    } else {
      console.log(this.ionicForm.value);
      let emp = this.ionicForm.value;

      emp["created"] = Date.now();
      emp["activitieList"] = this.activitiesList;
      this.tabTravaux.push(emp);
      this.activitiesList = [];
      console.log(this.tabTravaux);
      this.ionicForm.reset();
      this.displayForm = false;
      setTimeout(() => {
        this.presentAlertConfirm();
      }, 1500);
      // emp["startAt"] = debut;
      // emp["endAt"] = fin;

      /* this.travauxService
        .postTravauxToFirebase(emp)
        .then((res) => {
          console.log(res);
          this.notif.presentMessage("enregistré!!!");
          this.ionicForm.reset();
          this.activitiesList = [];
        })
        .catch((err) => {
          console.log(err);
        }); */
    }
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Travail enregistré!",
      message: "Ajouter un autre <strong>travail </strong>?",
      buttons: [
        {
          text: "NON",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {},
        },
        {
          text: "OUI",
          handler: () => {
            this.displayForm = true;
          },
        },
      ],
    });

    await alert.present();
  }
  async saveProjet() {
    //console.log(this.projet);
    // console.log(this.tabTravaux);
    if (this.projet["travauxlist"]) {
      this.projet["travauxlist"] = [
        ...this.projet["travauxlist"],
        ...this.tabTravaux,
      ];
      this.projet["TravauxListToAdd"] = this.tabTravaux;
    } else {
      this.projet["travauxlist"] = this.tabTravaux;
    }

    this.projetService.setProjet(this.projet);
    const modal = await this.modalController.create({
      component: TravauxBeforeSavePage,
      cssClass: "my-custom-class",
      backdropDismiss: false,
      componentProps: {},
    });
    modal.onWillDismiss().then((data) => {
      console.log(data);
      if (data["data"] && data["data"]["save"]) {
        if (this.projet["add"]) {
          setTimeout(() => {
            this.modalController.dismiss();
          });
        } else {
          this.router.navigateByUrl("projet");
        }
      }
    });
    return await modal.present();
  }
  /* getActivities() {
    this.activitiService.getLastTenActivitie().subscribe((data) => {
      console.log(data);
      this.activitiesTab = data;
    });
  }  */
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

  getActivitieName() {
    this.materielService.getActivieNames().subscribe(
      (data: Array<any>) => {
        console.log(data);

        this.nameList = data;
        console.log(this.nameList);

        // this.getEquipementFromFirebase();
      },
      (err) => {
        // this.getEquipementFromFirebase();
      }
    );
  }

  /* selectByday() {
    let day2 = this.model2.day + 1;
    let day1 = this.model.day;
    let debut = new Date(
      this.model.year + "-" + this.model.month + "-" + day1
    ).getTime();
    let fin = new Date(
      this.model2.year + "-" + this.model2.month + "-" + day2
    ).getTime();
  }*/
  async pickActivitiName() {
    console.log(this.nameList);

    this.activitiList.setActivitieList(this.nameList);
    const modal = await this.modalController.create({
      // component: ListCreatedActivitiesPage,
      component: AddActivieModalPage,
      cssClass: "my-custom-class",
      backdropDismiss: false,
      componentProps: {},
    });
    modal.onWillDismiss().then((data) => {
      console.log(data);
      if (data["data"]["activities"]) {
        let tab = data["data"]["activities"];
        if (tab && tab.length) {
          this.activitiesList = tab;
        } else {
          this.activitiesList = [];
        }
        //this.name = this.activitieName;
        // this.nameKey = data["data"]["activitie"]["key"];
      }
      if (data["data"]["activitie"]) {
        let prix = 0;
        let tab = data["data"]["activitie"];
        tab.materielList.forEach((elt) => {
          prix = prix + parseInt(elt.price) * parseInt(elt.qty);
        });
        tab["coutMateriel"] = prix;
        //this.maindeouvre= parseInt(tab["coutmaindoeuvre"])
        this.activitiesList.push(tab);
        //this.name = this.activitieName;
        // this.nameKey = data["data"]["activitie"]["key"];
      }
    });
    return await modal.present();
  }
  getAllActivities() {
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
  async pickTravauxName() {
    console.log(this.projet);

    this.activitiList.setActivitieList(this.nameList);
    const modal = await this.modalController.create({
      component: ListActivitiesPage,
      cssClass: "my-custom-class",
      backdropDismiss: false,
      componentProps: {},
    });
    modal.onWillDismiss().then((data) => {
      console.log(data);
      if (data["data"]["activitie"]) {
        this.activitieName = data["data"]["activitie"]["name"];
        this.name = this.activitieName;
        this.nameKey = data["data"]["activitie"]["key"];
      }
    });
    return await modal.present();
  }

  async addExecutant(row) {
    console.log(this.nameList);

    const modal = await this.modalController.create({
      component: SelectEmployePage,
      cssClass: "my-custom-class",
      backdropDismiss: false,
      componentProps: {},
    });
    modal.onWillDismiss().then((data) => {
      console.log(data);
      if (
        data["data"] &&
        data["data"]["employeList"] &&
        data["data"]["employeList"].length
      ) {
        // this.executantList = data["data"]["employeList"];
        row.executant = data["data"]["employeList"];
      } else {
        // this.executantList = [];
      }
    });
    return await modal.present();
  }
}
