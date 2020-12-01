import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-display-image",
  templateUrl: "./display-image.page.html",
  styleUrls: ["./display-image.page.scss"],
})
export class DisplayImagePage implements OnInit {
  photoURL: any;

  constructor(
    private userService: UserService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.photoURL = this.userService.getImage();
  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
