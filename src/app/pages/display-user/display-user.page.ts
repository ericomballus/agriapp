import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { AvanceSalairePage } from "src/app/modal/avance-salaire/avance-salaire.page";
import { DisplaAllMaindoeuvrePage } from "src/app/modal/displa-all-maindoeuvre/displa-all-maindoeuvre.page";
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
    if (this.user.salaireList && this.user.salaireList.length) {
      this.user.salaireList.sort(function (a, b) {
        if (a.mois > b.mois) {
          return 1;
        }
        if (a.mois < b.mois) {
          return -1;
        }
        return 0;
      });
    }
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

  async effectuerAvanceSalaire() {
    const modal = await this.modalController.create({
      component: AvanceSalairePage,
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
  async displayMaindeouvre(user) {
    const modal = await this.modalController.create({
      component: DisplaAllMaindoeuvrePage,
      cssClass: "my-custom-class",
      backdropDismiss: false,
      componentProps: {
        user: this.user,
      },
    });
    modal.onWillDismiss().then((data) => {
      console.log(data);
    });
    return await modal.present();
  }
}
