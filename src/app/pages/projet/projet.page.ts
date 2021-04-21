import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Activities } from "../../models/activities.model";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { Plugins, NetworkStatus, PluginListenerHandle } from "@capacitor/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { AlertController, ModalController } from "@ionic/angular";
import { InstructionPage } from "../../modal/instruction/instruction.page";
import * as firebsase from "firebase";
import { AddActivieModalPage } from "src/app/modal/add-activie-modal/add-activie-modal.page";
import { Router } from "@angular/router";
import { NotificationService } from "src/app/services/notification.service";
import { ProjetApiService } from "src/app/services/projet-api.service";
import { DisplayTravauxListPage } from "src/app/modal/display-travaux-list/display-travaux-list.page";
import { DisplayActivityListPage } from "src/app/modal/display-activity-list/display-activity-list.page";
import { DisplayMaterielListPage } from "src/app/modal/display-materiel-list/display-materiel-list.page";
const { Network } = Plugins;

@Component({
  selector: "app-projet",
  templateUrl: "./projet.page.html",
  styleUrls: ["./projet.page.scss"],
})
export class ProjetPage implements OnInit {
  ionicForm: FormGroup;
  // defaultDate = "1987-06-30";
  isSubmitted = false;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  activitiesTab = [];
  tabRole = [];
  constructor(
    public formBuilder: FormBuilder,
    public activitiService: ActivitiesApiService,
    private database: AngularFireDatabase,
    public modalController: ModalController,
    private notif: NotificationService,
    public router: Router,
    public projetService: ProjetApiService,
    public alertController: AlertController
  ) {
    this.getStatus();
    this.getTravaux();
  }
  ionViewWillEnter() {
    console.log(JSON.parse(localStorage.getItem("tabRole")));
    this.tabRole = JSON.parse(localStorage.getItem("tabRole"));
    if (this.tabRole.includes(2) || this.tabRole.includes(3)) {
      this.router.navigateByUrl("home");
      this.notif.presentError(
        "vous n'avez pas les autorisations necéssaires pour cette page",
        "danger"
      );
    } else {
    }
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
          this.getTravaux();
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
  getTravaux() {
    this.projetService.getLastTenPorjet().subscribe(
      (data: Array<any>) => {
        console.log(data);
        this.activitiesTab = data;
        if (this.activitiesTab && this.activitiesTab.length) {
          this.activitiesTab.forEach((projet) => {
            let nbr_activites = 0;
            let travaux = projet["travauxlist"];
            if (travaux && travaux.length) {
              travaux.forEach((tra) => {
                if (tra["activitieList"] && tra["activitieList"].length) {
                  nbr_activites = nbr_activites + tra["activitieList"].length;
                } else {
                  nbr_activites = nbr_activites;
                }
              });
              projet["nbractivite"] = nbr_activites;
            }
          });
        }
      },
      (err) => {
        // this.getActivityFromFirebase();
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
    // this.activitiService.setData(row);
    // this.router.navigateByUrl("instruction");
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

  async createProjet() {
    this.router.navigateByUrl("add-projet");
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

  async displayPorjetTravaux(row) {
    row["add"] = true;
    this.projetService.setProjet(row);
    this.projetService.setOldProjet(row);
    const modal = await this.modalController.create({
      component: DisplayTravauxListPage,
      cssClass: "my-custom-class",
      componentProps: {
        projet: row,
      },
    });
    modal.onWillDismiss().then(async (result) => {
      console.log(result);
      if (result.data["somedata"]) {
        let projet = result.data["projet"];

        let activity = this.activitiService.getOneActivity(); // array des activités

        let travail = this.projetService.getTravail();

        let index = activity.length - 1; // je recupére l'index de l'activité ajouté
        let act = activity[index];
        act["projetName"] = projet["name"];
        act["travauxName"] = travail["name"];
        this.activitiService
          .postActivitieToFirebase(act)
          .then((res) => console.log(res));
        this.projetService.updateProjet(projet).then((res) => {
          this.notif.presentMessage("activité correctement ajouté au projet");
        });
      }
    });
    return await modal.present();
  }
  async displayProjetActivity(row) {
    console.log(row);
    this.projetService.setProjet(row);
    const modal = await this.modalController.create({
      component: DisplayActivityListPage,
      cssClass: "my-custom-class",
      componentProps: {
        projet: row,
      },
    });
    return await modal.present();
  }

  async displayMateriel(row) {
    this.projetService.setProjet(row);
    const modal = await this.modalController.create({
      component: DisplayMaterielListPage,
      cssClass: "my-custom-class",
      componentProps: {
        projet: row,
      },
    });
    return await modal.present();
  }

  async displayPeriode(row) {
    var d = new Date(row.endAt).getDate();
    var m = new Date(row.endAt).getMonth();
    var y = new Date(row.endAt).getFullYear();
    var d1 = new Date(row.startAt).getDate();
    var m1 = new Date(row.startAt).getMonth();
    var y1 = new Date(row.startAt).getFullYear();

    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Periode",
      subHeader: "",
      message: `Début: ${d1}-${m1}-${y1}
        FIN: ${d}-${m}-${y}`,
      buttons: ["OK"],
    });

    await alert.present();
  }
}
