import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { UserService } from "src/app/services/user.service";
import { DisplayImagePage } from "../display-image/display-image.page";
import { PaieUserPage } from "../paie-user/paie-user.page";

@Component({
  selector: "app-display-user",
  templateUrl: "./display-user.page.html",
  styleUrls: ["./display-user.page.scss"],
})
export class DisplayUserPage implements OnInit {
  user: any;
  constructor(
    private userService: UserService,
    private router: Router,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.user = this.userService.getEmploye();
    console.log(this.user);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: PaieUserPage,
      cssClass: "my-custom-class",
      backdropDismiss: false,
      componentProps: {},
    });
    modal.onWillDismiss().then((data) => {
      console.log(data);
    });
    return await modal.present();
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
