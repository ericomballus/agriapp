import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { ProjetApiService } from "src/app/services/projet-api.service";
import { DisplayActivityListPage } from "../display-activity-list/display-activity-list.page";
import { DisplayOneActivityListPage } from "../display-one-activity-list/display-one-activity-list.page";

@Component({
  selector: "app-display-travaux-list",
  templateUrl: "./display-travaux-list.page.html",
  styleUrls: ["./display-travaux-list.page.scss"],
})
export class DisplayTravauxListPage implements OnInit {
  projet: any;
  constructor(
    public projetService: ProjetApiService,
    public modalController: ModalController,
    public activityService: ActivitiesApiService
  ) {
    this.projet = this.projetService.getProjet();
    console.log(this.projet);

    let travaux1 = this.projet["travauxlist"];
    travaux1.forEach((elt) => {
      let materiel = 0;
      let activityList = elt["activitieList"];
      activityList.forEach((activi) => {
        materiel = materiel + activi["materielList"].length;
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
  async displayProjetActivity(row, activitie) {
    console.log(activitie);
    this.activityService.setOneActivity(activitie);
    const modal = await this.modalController.create({
      component: DisplayOneActivityListPage,
      cssClass: "my-custom-class",
      componentProps: {
        activity: activitie,
      },
    });
    return await modal.present();
  }
}
