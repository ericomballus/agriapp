import { Component, Input, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
import { log } from "console";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { NotificationService } from "src/app/services/notification.service";
import { SelectEmployePage } from "../select-employe/select-employe.page";

@Component({
  selector: "app-display-executant",
  templateUrl: "./display-executant.page.html",
  styleUrls: ["./display-executant.page.scss"],
})
export class DisplayExecutantPage implements OnInit {
  @Input() activity: any;
  total = 0;
  reste = 0;
  constructor(
    public modalController: ModalController,
    public activityService: ActivitiesApiService,
    public notif: NotificationService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    console.log(this.activity);
    this.faireLeBilan();
    //this.montantPerçu();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  faireLeBilan() {
    let sum = 0;
    this.activityService
      .getOneActivitie(this.activity["created"])
      .then((res) => {
        console.log(res);
        if (res) {
          this.activity = res[0];
          this.activity["executant"].forEach((exe) => {
            console.log(exe);
            if (exe["maindoeuvreList"] && exe["maindoeuvreList"].length) {
              // sum = sum + exe["maindoeuvre"];
              exe["maindoeuvreList"].forEach((elt) => {
                if (elt["activityKey"] == this.activity["key"]) {
                  sum = sum + elt["montant"];
                }
              });
            }
          });
          this.total = sum;
          this.reste = parseInt(this.activity.coutmaindoeuvre) - sum;
          this.montantPerçu();
        }
      });
    /* this.activitie["executant"].forEach((exe) => {
      console.log(exe);
      if (exe["maindoeuvre"]) {
        sum = sum + exe["maindoeuvre"];
      }
    });*/
  }
  montantPerçu() {
    this.activity["executant"].forEach((exe) => {
      console.log(exe);
      if (exe["maindoeuvreList"] && exe["maindoeuvreList"].length) {
        // sum = sum + exe["maindoeuvre"];
        let sum = 0;
        exe["maindoeuvreList"].forEach((elt) => {
          // sum = sum + elt["montant"];

          if (elt["activityKey"] == this.activity["key"]) {
            sum = sum + elt["montant"];
            // this.tabList.push(elt);
          }
        });
        exe["maindoeuvre"] = sum;
      } else {
        exe["maindoeuvre"] = 0;
      }
    });

    //  this.reste = parseInt(this.activitie.coutmaindoeuvre) - sum;
  }
  removeUser(user) {
    console.log(user);
    this.presentAlertPrompt(user);
    /* */
  }
  async addExecutant() {
    const modal = await this.modalController.create({
      component: SelectEmployePage,
      cssClass: "my-custom-class",
      backdropDismiss: false,
      componentProps: {},
    });
    modal.onWillDismiss().then((data) => {
      console.log(data);
      if (
        data["data"] &&
        data["data"]["employeList"] &&
        data["data"]["employeList"].length
      ) {
        let executantList = data["data"]["employeList"];

        executantList.forEach((user) => {
          this.notif.presentLoading();
          console.log(user);
          this.addNewUser(user);
        });
        this.notif.dismmisLoading();
        setTimeout(() => {
          this.activityService.updateData(this.activity).then((res) => {
            console.log(res);
            this.notif.presentMessage("mise a  jour effectué avec succé!");
          });
        }, 2000);
        // this.activity["executant"].forEach((elt) => {});
        /* if (tab.length) {
          console.log("hello tab", tab);
          this.activity["executant"] = [...this.activity["executant"], ...tab];
          console.log(this.activity["executant"]);
        }*/

        /* this.activityService.updateData(this.activity).then((res) => {
          console.log(res);
        });*/
      } else {
        //this.executantList = [];
      }
    });
    return await modal.present();
  }
  addNewUser(user) {
    let index = this.activity["executant"].findIndex((elt) => {
      return elt["key"] == user["key"];
    });
    if (index >= 0) {
      console.log(index);
      this.activity["executant"].splice(index, 1, user);
    } else {
      this.activity["executant"].push(user);
    }
    console.log(this.activity["executant"]);
  }

  async presentAlertPrompt(user) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "veuillez saisir le motif de la suppression",
      inputs: [
        {
          name: "motif",
          id: "motif",
          type: "textarea",
          placeholder: "Placeholder 3",
        },
      ],
      buttons: [
        {
          text: "ANNULER",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            this.notif.presentLoading();
            console.log(data);

            user["display"] = false;
            user["motif"] = data["motif"];
            user["maindoeuvreList"].map((x) => {
              if (x["activityKey"] == this.activity["key"]) {
                x["display"] == false;
                x["motif"] = data["motif"];
              }
            });
            let index = this.activity["executant"].findIndex((elt) => {
              return elt["key"] == user["key"];
            });

            if (index >= 0) {
              this.activity["executant"].splice(index, 1, user);
              this.activityService.updateData(this.activity).then((res) => {
                console.log(res);
                this.notif.dismmisLoading();
                this.notif.presentMessage("opération effectué avec succé!");
              });
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async showMotif(user) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Motif suppression",
      message: `${user.motif}`,
      buttons: [
        {
          text: "Ok",
          handler: () => {
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();
  }
}
