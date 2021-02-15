import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-avance-salaire",
  templateUrl: "./avance-salaire.page.html",
  styleUrls: ["./avance-salaire.page.scss"],
})
export class AvanceSalairePage implements OnInit {
  @Input() user: any;
  constructor(
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    private userService: UserService
  ) {
    this.user = this.userService.getEmploye();
    console.log(this.user);
  }

  ngOnInit() {}

  dismiss(data?) {
    if (data) {
      this.user = data;
    }
    this.modalCtrl.dismiss({
      dismissed: true,
      user: this.user,
    });
  }
  selectDate(ev) {
    console.log(ev.target.value);
  }
}
