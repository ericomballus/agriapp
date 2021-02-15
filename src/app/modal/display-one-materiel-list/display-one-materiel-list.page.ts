import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ActivitiesApiService } from "src/app/services/activities-api.service";

@Component({
  selector: "app-display-one-materiel-list",
  templateUrl: "./display-one-materiel-list.page.html",
  styleUrls: ["./display-one-materiel-list.page.scss"],
})
export class DisplayOneMaterielListPage implements OnInit {
  activity: any;
  tabMateriel = [];
  total = 0;
  constructor(
    public activityService: ActivitiesApiService,
    public modalController: ModalController
  ) {
    this.activity = this.activityService.getOneActivity();
    console.log(this.activity);
    this.tabMateriel = this.activity["materielList"];
    this.tabMateriel.forEach((mat) => {
      this.total = this.total + mat.qty * mat.price;
    });
  }

  ngOnInit() {}
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
