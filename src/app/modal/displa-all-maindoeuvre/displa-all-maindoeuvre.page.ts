import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { DisplayImagePage } from "src/app/pages/display-image/display-image.page";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-displa-all-maindoeuvre",
  templateUrl: "./displa-all-maindoeuvre.page.html",
  styleUrls: ["./displa-all-maindoeuvre.page.scss"],
})
export class DisplaAllMaindoeuvrePage implements OnInit {
  @Input() user: any;
  total = 0;
  constructor(
    public modalController: ModalController,
    public userService: UserService,
    public activityService: ActivitiesApiService
  ) {}

  ngOnInit() {
    console.log(this.user);
    this.user["maindoeuvreList"].forEach((elt) => {
      // if (elt["activityKey"] == this.activity["key"]) {
      this.total = this.total + elt["montant"];
      if (elt["activityKey"]) {
        this.activityService.getActivitie(elt["activityKey"]).then((res) => {
          console.log(res);
          elt["activityName"] = res[0]["name"];
          elt["projetName"] = res[0]["projetName"];
        });
      }

      // this.tabList.push(elt);
      // }
    });
  }
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  async zoomImage(url) {
    this.userService.setImage(url);
    const modal = await this.modalController.create({
      component: DisplayImagePage,
      cssClass: "my-custom-class",
      backdropDismiss: false,
      componentProps: {},
    });
    modal.onWillDismiss().then((data) => {
      console.log(data);
    });
    return await modal.present();
  }
}
