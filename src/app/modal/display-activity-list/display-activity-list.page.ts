import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { ProjetApiService } from "src/app/services/projet-api.service";
import { DisplayExecutantPage } from "../display-executant/display-executant.page";
import { DisplayOneMaterielListPage } from "../display-one-materiel-list/display-one-materiel-list.page";

@Component({
  selector: "app-display-activity-list",
  templateUrl: "./display-activity-list.page.html",
  styleUrls: ["./display-activity-list.page.scss"],
})
export class DisplayActivityListPage implements OnInit {
  projet: any;
  activilist = [];
  constructor(
    public projetService: ProjetApiService,
    public modalCtrl: ModalController,
    public activityService: ActivitiesApiService,
    public modalController: ModalController
  ) {
    this.projet = this.projetService.getProjet();
    console.log(this.projet);

    let travaux1 = this.projet["travauxlist"];
    if (travaux1 && travaux1.length) {
      travaux1.forEach((elt) => {
        let materiel = 0;
        let activityList = elt["activitieList"];
        if (activityList && activityList.length) {
          activityList.forEach((activity) => {
            activity["travailName"] = elt.name;
          });
          this.activilist = [...this.activilist, ...activityList];
          activityList.forEach((activi) => {
            if (activi["materielList"] && activi["materielList"].length) {
              materiel = materiel + activi["materielList"].length;
            }
          });
          elt["materiel"] = materiel;
        }

        console.log(this.activilist);
      });
    }
  }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  async displayMateriel(row) {
    console.log(row);
    this.activityService.setOneActivity(row);
    const modal = await this.modalController.create({
      component: DisplayOneMaterielListPage,
      cssClass: "my-custom-class",
      componentProps: {
        activity: row,
      },
    });
    return await modal.present();
  }

  async displayAllExecutant(row) {
    const modal = await this.modalController.create({
      component: DisplayExecutantPage,
      cssClass: "my-custom-class",
      componentProps: {
        activity: row,
      },
    });
    return await modal.present();
  }
}
