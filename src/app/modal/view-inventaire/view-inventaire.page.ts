import { Component, OnInit } from "@angular/core";
import { InventaireService } from "src/app/services/inventaire.service";
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-view-inventaire",
  templateUrl: "./view-inventaire.page.html",
  styleUrls: ["./view-inventaire.page.scss"],
})
export class ViewInventairePage implements OnInit {
  avaible = 0;
  add = 0;
  out = 0;
  constructor(
    private inventaireService: InventaireService,
    private calendar: NgbCalendar,
    private database: AngularFireDatabase
  ) {}
  prod: any;
  model: NgbDateStruct;
  date: { year: number; month: number };
  model2: NgbDateStruct;
  date2: { year: number; month: number };
  inventaireRandom = [];
  ngOnInit() {
    this.model = this.calendar.getToday();
    this.model2 = this.calendar.getToday();
    this.prod = this.inventaireService.getData();
    console.log(this.prod);
    this.inventaireRandom = this.prod.tabInventaire;
    let tab = this.prod.tabInventaire;
    tab.forEach((prod) => {
      this.add = parseInt(prod.add) + this.add;
      this.out = parseInt(prod.out) + this.out;
    });
    this.avaible = this.add - this.out;
  }

  selectByday() {
    let tab = [];
    let tabList = [];
    let day2 = this.model2.day + 1;
    let day1 = this.model.day;
    let debut = new Date(
      this.model.year + "-" + this.model.month + "-" + day1
    ).getTime();
    let fin = new Date(
      this.model2.year + "-" + this.model2.month + "-" + day2
    ).getTime();
    tab = this.inventaireRandom.filter((elt) => {
      return elt.created >= debut && elt.created <= fin;
    });
    this.prod.tabInventaire = tab;
    console.log(this.prod);
    console.log(tab);
  }
}
