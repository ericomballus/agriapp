import { Component, OnInit } from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { NotificationService } from "src/app/services/notification.service";
import { ProjetApiService } from "src/app/services/projet-api.service";
import { TravauxApiService } from "src/app/services/travaux-api.service";
@Component({
  selector: "app-travaux-before-save",
  templateUrl: "./travaux-before-save.page.html",
  styleUrls: ["./travaux-before-save.page.scss"],
})
export class TravauxBeforeSavePage implements OnInit {
  activitiesTab: any;
  projet: any;
  tab = [];
  constructor(
    public projetService: ProjetApiService,
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    public notif: NotificationService,
    public activitiService: ActivitiesApiService,
    public travauxService: TravauxApiService
  ) {
    this.projet = this.projetService.getProjet();
    console.log(this.projet);
  }

  ngOnInit() {}
  dismiss(data?) {
    this.modalCtrl.dismiss({
      dismissed: true,
      // activities: this.tab,
    });
  }
  presentActivity(row) {
    if (row["open"]) {
      row["open"] = !row["open"];
    } else {
      row["open"] = true;
    }
  }
  saveProjet() {
    this.notif.infiniteLoading();
    this.projet["travauxlist"].forEach((travaux) => {
      travaux["activitieList"].forEach((activitie) => {
        activitie["projetName"] = this.projet["name"];
        activitie["travauxName"] = travaux["name"];
        this.activitiService
          .postActivitieToFirebase(activitie)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
      travaux["projetName"] = this.projet["name"];
      this.travauxService
        .postTravauxToFirebase(travaux)
        .then((res) => {
          console.log(res);
          // this.notif.presentMessage("enregistré!!!");
        })
        .catch((err) => {
          console.log(err);
        });
    });
    this.notif.presentMessage("le projet a été enregistré!!!");
    this.projetService
      .postPorjetToFirebase(this.projet)
      .then((res) => {
        // console.log(res);
        this.notif.dismmisLoading();
        this.notif.presentMessage("enregistré!!!");
        this.modalCtrl.dismiss({
          dismissed: true,
          save: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
