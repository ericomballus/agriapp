import { Component, OnInit } from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import { ActivitiesApiService } from "src/app/services/activities-api.service";

@Component({
  selector: "app-list-created-activities",
  templateUrl: "./list-created-activities.page.html",
  styleUrls: ["./list-created-activities.page.scss"],
})
export class ListCreatedActivitiesPage implements OnInit {
  activitiesTab: any;
  activitie: any;
  tab = [];
  constructor(
    private activitiService: ActivitiesApiService,
    public modalCtrl: ModalController,
    public loadingController: LoadingController
  ) {
    this.getAllActivities();
  }

  ngOnInit() {}
  getAllActivities() {
    this.activitiService.getLastTenActivitie().subscribe(
      (data: Array<any>) => {
        console.log(data);

        this.activitiesTab = data;
        // this.activitiesTab = this.activitiesTab.reverse();
      },
      (err) => {
        // this.getActivityFromFirebase();
      }
    );
  }
  dismiss(data?) {
    if (data) {
      this.activitie = data;
    }
    this.modalCtrl.dismiss({
      dismissed: true,
      activities: this.tab,
    });
  }

  selectActivities(row) {
    console.log(row);
    if (this.tab.length) {
      let index = this.tab.findIndex((elt) => {
        return elt.key === row.key;
      });
      console.log(index);

      if (index >= 0) {
        this.tab = this.tab.filter((p) => {
          return p.key != row.key;
        });
      } else {
        this.tab.push(row);
      }
      console.log(this.tab);
    } else {
      this.tab.push(row);
    }
  }
}
