import { Component, OnInit } from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
@Component({
  selector: "app-list-activities",
  templateUrl: "./list-activities.page.html",
  styleUrls: ["./list-activities.page.scss"],
})
export class ListActivitiesPage implements OnInit {
  activitie: any;
  tab = [];
  constructor(
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    private activitiList: ActivitiesApiService
  ) {
    this.tab = this.activitiList.getActivitieList();
    console.log(this.tab);
  }

  ngOnInit() {}

  dismiss(data?) {
    if (data) {
      this.activitie = data;
    }
    this.modalCtrl.dismiss({
      dismissed: true,
      activitie: this.activitie,
    });
  }
}
