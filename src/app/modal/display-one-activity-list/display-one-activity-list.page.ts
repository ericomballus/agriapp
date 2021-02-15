import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { DisplayOneMaterielListPage } from "../display-one-materiel-list/display-one-materiel-list.page";

@Component({
  selector: "app-display-one-activity-list",
  templateUrl: "./display-one-activity-list.page.html",
  styleUrls: ["./display-one-activity-list.page.scss"],
})
export class DisplayOneActivityListPage implements OnInit {
  activity: any;
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
}
