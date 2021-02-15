import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ProjetApiService } from "src/app/services/projet-api.service";

@Component({
  selector: "app-display-materiel-list",
  templateUrl: "./display-materiel-list.page.html",
  styleUrls: ["./display-materiel-list.page.scss"],
})
export class DisplayMaterielListPage implements OnInit {
  projet: any;
  activilist = [];
  tabMateriel = [];
  total = 0;
  constructor(
    public projetService: ProjetApiService,
    public modalCtrl: ModalController
  ) {
    this.projet = this.projetService.getProjet();
    console.log(this.projet);

    let travaux1 = this.projet["travauxlist"];
    travaux1.forEach((elt) => {
      let materiel = 0;
      let activityList = elt["activitieList"];
      elt["activitieList"].forEach((activity) => {
        activity["travailName"] = elt.name;
        this.tabMateriel = [...this.tabMateriel, ...activity["materielList"]];
      });

      this.activilist = [...this.activilist, ...elt["activitieList"]];
      activityList.forEach((activi) => {
        materiel = materiel + activi["materielList"].length;
      });
      elt["materiel"] = materiel;
    });
    console.log(this.activilist);
    console.log(this.tabMateriel);
    this.tabMateriel.forEach((mat) => {
      this.total = this.total + mat.qty * mat.price;
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  ngOnInit() {}
  displayMateriel(row) {
    console.log(row);
  }
}
