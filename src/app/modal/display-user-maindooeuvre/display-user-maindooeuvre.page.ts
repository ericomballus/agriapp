import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { DisplayImagePage } from "src/app/pages/display-image/display-image.page";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-display-user-maindooeuvre",
  templateUrl: "./display-user-maindooeuvre.page.html",
  styleUrls: ["./display-user-maindooeuvre.page.scss"],
})
export class DisplayUserMaindooeuvrePage implements OnInit {
  @Input() user: any;
  @Input() activity: any;
  tabList = [];
  total = 0;
  constructor(
    public modalController: ModalController,
    public userService: UserService
  ) {}

  ngOnInit() {
    console.log(this.user);
    console.log(this.activity);
    /* this.tabList = this.user["maindoeuvreList"].filter((elt) => {
      return elt["activityKey"] == this.activity["key"];
    });*/
    this.user["maindoeuvreList"].forEach((elt) => {
      if (elt["activityKey"] == this.activity["key"]) {
        this.total = this.total + elt["montant"];
        this.tabList.push(elt);
      }
    });
    console.log(this.tabList);
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
