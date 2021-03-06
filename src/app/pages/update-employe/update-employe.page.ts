import { Component, OnInit, ViewChild } from "@angular/core";
import { Employe } from "../../models/employe.model";
import { UserService } from "src/app/services/user.service";
import { AngularFireDatabase } from "@angular/fire/database";
import { AuthentificationService } from "src/app/services/authentification.service";
import firebase from "firebase/app";
import "firebase/storage";
import { NotificationService } from "src/app/services/notification.service";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { DisplayImagePage } from "../display-image/display-image.page";

@Component({
  selector: "app-update-employe",
  templateUrl: "./update-employe.page.html",
  styleUrls: ["./update-employe.page.scss"],
})
export class UpdateEmployePage implements OnInit {
  employe: Employe;
  dataNaissance: string;
  roles = [
    { name: "Admin", id: 0 },
    { name: "Manager", id: 1 },
    { name: "Warehouseman", id: 2 },
    { name: "Other", id: 3 },
  ];
  constructor(
    public userService: UserService,
    private database: AngularFireDatabase,
    public auth: AuthentificationService,
    public notif: NotificationService,
    public router: Router,
    public modalController: ModalController
  ) {
    this.employe = this.userService.getEmploye();
    if (this.employe.tabRole) {
      console.log("existe");
    } else {
      this.employe.tabRole = [];
    }
    console.log(this.employe);
  }

  ngOnInit() {}

  updatEmploye() {
    Array.isArray;
    this.userService.updateUser(this.employe).then((res) => {
      this.notif.presentMessage("mise a jour effectué!!");
    });
  }
  birthday(e) {
    this.dataNaissance = e.target.value;
    this.employe["dateNaissance"] = this.dataNaissance;
  }
  selectEvent(ev) {
    console.log(ev.detail.value);
    let id = ev.detail.value.id;
    let tab = [];
    tab.push(id);
    this.employe.tabRole = tab;

    /* tab.forEach((materiel) => {
      this.besoinMateriel = this.besoinMateriel + "," + materiel.name;
    }); */
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
