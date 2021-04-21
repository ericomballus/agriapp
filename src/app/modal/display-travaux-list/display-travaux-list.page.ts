import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { TravauxPage } from "src/app/pages/travaux/travaux.page";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { ProjetApiService } from "src/app/services/projet-api.service";
import { AddTravauxPage } from "../add-travaux/add-travaux.page";
import { DisplayActivityListPage } from "../display-activity-list/display-activity-list.page";
import { DisplayOneActivityListPage } from "../display-one-activity-list/display-one-activity-list.page";

@Component({
  selector: "app-display-travaux-list",
  templateUrl: "./display-travaux-list.page.html",
  styleUrls: ["./display-travaux-list.page.scss"],
})
export class DisplayTravauxListPage implements OnInit {
  projet: any;
  activityList: any;
  constructor(
    public projetService: ProjetApiService,
    public modalController: ModalController,
    public activityService: ActivitiesApiService,
    public router: Router
  ) {
    this.projet = this.projetService.getProjet();
    console.log(this.projet);

    let travaux1 = this.projet["travauxlist"];
    travaux1.forEach((elt) => {
      let materiel = 0;
      this.activityList = elt["activitieList"];
      this.activityList.forEach((activi) => {
        if (activi["materielList"] && activi["materielList"].length) {
          materiel = materiel + activi["materielList"].length;
        }
      });
      elt["materiel"] = materiel;
    });
  }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  async displayProjetActivity(row, activitie, index) {
    console.log(activitie);
    this.projetService.setTravaux(row);
    this.activityService.setOneActivity(activitie);
    const modal = await this.modalController.create({
      component: DisplayOneActivityListPage,
      cssClass: "my-custom-class",
      componentProps: {
        activity: activitie,
      },
    });
    modal.onWillDismiss().then((result) => {
      // console.log(result);
      if (result.data["somedata"]) {
        // console.log(row);
        console.log(index);
        let tab = this.activityService.getOneActivity();
        console.log(this.projet["travauxlist"]);

        this.projet["travauxlist"][index];
        this.projet["travauxlist"][index]["activitieList"] = tab;

        this.projet["travauxlist"].forEach((elt) => {
          let materiel = 0;
          this.activityList = elt["activitieList"];
          this.activityList.forEach((activi) => {
            if (activi["materielList"] && activi["materielList"].length) {
              materiel = materiel + activi["materielList"].length;
            }
          });
          elt["materiel"] = materiel;
        });
        this.projetService.setProjet(this.projet);
        setTimeout(() => {
          this.modalController.dismiss({
            projet: this.projet,
            somedata: true,
          });
        }, 1000);
      }
    });
    return await modal.present();
  }

  async addTravail() {
    // this.router.navigateByUrl("add-travaux");
    // console.log(activitie);
    // this.projetService.setTravaux(row);
    // this.activityService.setOneActivity(activitie);
    const modal = await this.modalController.create({
      component: AddTravauxPage,
      cssClass: "my-custom-class-width",
    });
    modal.onWillDismiss().then((result) => {
      console.log(result);
    });
    return await modal.present();
  }
}
