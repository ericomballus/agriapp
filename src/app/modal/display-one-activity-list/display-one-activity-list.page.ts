import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { AddActivieModalPage } from "../add-activie-modal/add-activie-modal.page";
import { AjouteractivitePage } from "../ajouteractivite/ajouteractivite.page";
import { DisplayOneMaterielListPage } from "../display-one-materiel-list/display-one-materiel-list.page";

@Component({
  selector: "app-display-one-activity-list",
  templateUrl: "./display-one-activity-list.page.html",
  styleUrls: ["./display-one-activity-list.page.scss"],
})
export class DisplayOneActivityListPage implements OnInit {
  activity = [];
  constructor(
    public activityService: ActivitiesApiService,
    public modalController: ModalController
  ) {
    this.activity = this.activityService.getOneActivity();
    console.log(this.activity);
  }

  ngOnInit() {}
  dismiss() {
    this.modalController.dismiss({
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

  async addActivity() {
    // this.activityService.setOneActivity(row);  AjouteractivitePage,

    const modal = await this.modalController.create({
      component: AddActivieModalPage,
      // cssClass: "my-custom-class",
      backdropDismiss: false,
      componentProps: {},
    });
    modal.onWillDismiss().then((result) => {
      console.log(result);
      if (result.data["activitie"]) {
        this.activity.push(result.data["activitie"]);
        this.activityService.setOneActivity(this.activity);
        setTimeout(() => {
          this.modalController.dismiss({
            somedata: true,
          });
        }, 1000);
      }
    });
    return await modal.present();
  }
}
