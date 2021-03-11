import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { ActionSheetController, ToastController } from "@ionic/angular";
import { AngularFireDatabase } from "@angular/fire/database";
import { AuthentificationService } from "src/app/services/authentification.service";
import { NotificationService } from "src/app/services/notification.service";
import { Router } from "@angular/router";
import { TrackingService } from "src/app/services/tracking.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"],
})
export class AdminPage implements OnInit {
  tabRole = [];
  trackList = [];
  constructor(
    public userService: UserService,
    public notif: NotificationService,
    public router: Router,
    public tracking: TrackingService,
    public actionSheet: ActionSheetController,
    public auth: AuthentificationService
  ) {}

  ionViewWillEnter() {
    console.log(JSON.parse(localStorage.getItem("tabRole")));
    this.tabRole = JSON.parse(localStorage.getItem("tabRole"));
    if (
      this.tabRole.includes(1) ||
      this.tabRole.includes(2) ||
      this.tabRole.includes(3)
    ) {
      const url = this.router.url;
      this.router.navigateByUrl("home");
      this.notif.presentError(
        "vous n'avez pas les autorisations necéssaires pour cette page",
        "danger"
      );
      this.tracking.postTrackingToFirebase("page admin", url);

      // this.postTracking();
    } else {
      this.getTracking();
    }
  }

  ngOnInit() {}

  getTracking() {
    this.tracking.getTrackingToFirebase().subscribe((data) => {
      console.log(data);
      this.trackList = data.reverse();
    });
  }
  async disableInitPassword() {
    const actionSheet = await this.actionSheet.create({
      header: "Albums",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Delete Init Password",
          role: "destructive",
          icon: "trash",
          handler: () => {
            this.auth.getInitPassWord().then((res) => {
              if (res && res[0]) {
                console.log(res);
                if (res[0]["disable"] == false) {
                  let data = res[0];
                  data["disable"] = true;
                  this.auth.updateInitPassWord(data).then(() => {
                    this.notif.presentMessage("init password has been desable");
                  });
                } else {
                  this.notif.presentMessage("init password has been desable");
                }
              } else {
                let data = { disable: true };
                this.auth.changeInitPassWord(data).then((result) => {
                  console.log(result);

                  this.notif.presentMessage("init password has been desable");
                });
              }
            });
          },
        },
        {
          text: "Enable Init Password",
          icon: "share",
          handler: () => {
            this.auth.getInitPassWord().then((res) => {
              if (res && res[0]) {
                let data = res[0];
                data["disable"] = false;
                this.auth.updateInitPassWord(data).then(() => {
                  this.notif.presentMessage("init password has been enable");
                });
              } else {
              }
            });
          },
        },
        {
          text: "Play (open modal)",
          icon: "caret-forward-circle",
          handler: () => {
            console.log("Play clicked");
          },
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
