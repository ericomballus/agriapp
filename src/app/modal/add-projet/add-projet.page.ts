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
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";
import { ListActivitiesPage } from "../list-activities/list-activities.page";
import { ListCreatedTravauxPage } from "../list-created-travaux/list-created-travaux.page";
import { ProjetApiService } from "src/app/services/projet-api.service";
import { Router } from "@angular/router";
const { Network } = Plugins;

@Component({
  selector: "app-add-projet",
  templateUrl: "./add-projet.page.html",
  styleUrls: ["./add-projet.page.scss"],
})
export class AddProjetPage implements OnInit {
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
  customAlertOptions: any = {
    cssClass: "my-custom-class",
  };
  model: NgbDateStruct;
  date: { year: number; month: number };
  model2: NgbDateStruct;
  date2: { year: number; month: number };
  activitieName = "";
  ionicForm: FormGroup;
  travauxList = [];
  activitiesList = [];
  open = false;
  typeProduction: any;
  openAnimale = false;
  openVegetale = false;
  typeCulture: any;
  constructor(
    public formBuilder: FormBuilder,
    public activitiService: ActivitiesApiService,
    private database: AngularFireDatabase,
    public modalController: ModalController,
    public materielService: MaterielService,
    public notif: NotificationService,
    private calendar: NgbCalendar,
    private activitiList: ActivitiesApiService,
    private projetService: ProjetApiService,
    private router: Router
  ) {
    this.getStatus();
    // this.getActivitieName();
    // this.getMateriel();
  }

  async ngOnInit() {
    this.model = this.calendar.getToday();
    this.model2 = this.calendar.getToday();
    this.model = this.calendar.getToday();
    this.model2 = this.calendar.getToday();
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
      return false;
    } else {
      console.log(this.ionicForm.value);
      let emp = this.ionicForm.value;
      emp["created"] = Date.now();
      emp["travauxList"] = this.travauxList;
      emp["startAt"] = debut;
      emp["endAt"] = fin;
      emp["type_production"] = this.typeProduction;
      emp["type_culture"] = this.typeCulture;
      console.log(emp);
      this.projetService.setProjet(emp);
      this.router.navigateByUrl("add-travaux");
      /* this.projetService
        .postPorjetToFirebase(emp)
        .then((res) => {
          console.log(res);
          this.notif.presentMessage("enregistré!!!");
          this.ionicForm.reset();
          this.travauxList = [];
        })
        .catch((err) => {
          console.log(err);
        }); */
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

  typeDeProduction(ev) {
    console.log(ev.detail.value);
    this.typeProduction = ev.detail.value;
    /* tab.forEach((materiel) => {
      this.besoinMateriel = this.besoinMateriel + "," + materiel.name;
    }); 
    
   */
  }

  typeDeCulture(ev) {
    console.log(ev.detail.value);
    this.typeCulture = ev.detail.value;
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
        console.log(this.nameList);

        // this.getEquipementFromFirebase();
      },
      (err) => {
        // this.getEquipementFromFirebase();
      }
    );
  }

  addQuantity(ev) {
    this.quantity = parseInt(ev.detail.value);
    this.disabled = true;
    this.choixMateriel["qty"] = this.quantity;
  }

  selectByday() {
    let day2 = this.model2.day + 1;
    let day1 = this.model.day;
    let debut = new Date(
      this.model.year + "-" + this.model.month + "-" + day1
    ).getTime();
    let fin = new Date(
      this.model2.year + "-" + this.model2.month + "-" + day2
    ).getTime();
  }
  async pickTravaux() {
    const modal = await this.modalController.create({
      component: ListCreatedTravauxPage,
      cssClass: "my-custom-class",
      backdropDismiss: false,
      componentProps: {},
    });
    modal.onWillDismiss().then((data) => {
      console.log(data);
      if (data["data"]["activities"]) {
        let tab = data["data"]["activities"];
        if (tab && tab.length) {
          this.travauxList = tab;
        } else {
          this.travauxList = [];
        }
      }
    });
    return await modal.present();
  }
  selectVegetale(ev) {
    console.log(ev.target.value);
    this.openVegetale = !this.openVegetale;
  }

  selectAnimale(ev) {
    console.log(ev.target.value);
    this.openAnimale = !this.openAnimale;
  }

  selectCultureType(name) {
    console.log(name);
  }
}
