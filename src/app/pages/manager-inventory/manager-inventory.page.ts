import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { groupBy, mergeMap, toArray } from "rxjs/operators";
import { AchatService } from "src/app/services/achat.service";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { MaterielService } from "src/app/services/materiel.service";
import { NotificationService } from "src/app/services/notification.service";
import { UserService } from "src/app/services/user.service";
import { AngularFireDatabase } from "@angular/fire/database";
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { log } from "console";
import { InventaireService } from "src/app/services/inventaire.service";

@Component({
  selector: "app-manager-inventory",
  templateUrl: "./manager-inventory.page.html",
  styleUrls: ["./manager-inventory.page.scss"],
})
export class ManagerInventoryPage implements OnInit {
  model: NgbDateStruct;
  date: { year: number; month: number };
  model2: NgbDateStruct;
  date2: { year: number; month: number };
  tabList = [];
  tabListActivitie = [];
  total_amount = 0;
  totalQty = 0;
  disabled = false;
  materielListTab: Array<any>;
  randomObj = {};
  inventaireFlag: Boolean = false;
  constructor(
    private materialService: MaterielService,
    public activitiService: ActivitiesApiService,
    public achatService: AchatService,
    private notif: NotificationService,
    private userService: UserService,
    private calendar: NgbCalendar,
    private database: AngularFireDatabase,
    private router: Router,
    private inventaireService: InventaireService
  ) {}

  ngOnInit() {
    this.model = this.calendar.getToday();
    this.getMateriel();
    this.getInventaire();
  }

  getMateriel() {
    this.materialService.getMateriel().subscribe(
      (data: Array<any>) => {
        console.log(data);

        this.materielListTab = data;
      },
      (err) => {}
    );
  }

  getInventaire() {
    this.inventaireService.getInventaireFromFirebase().subscribe(
      (data: Array<any>) => {
        console.log(data);
        if (data[0]["inventaire"] && data[0]["inventaire"].length) {
          // this.materielListTab = data[0]["inventaire"];
        }
      },
      (err) => {}
    );
  }

  addIncrement(ev, prod, i) {
    let numb1 = parseInt(ev.target["value"]);
    //let qty = parseInt(prod["quantity"]);
    // let numb = qty - numb1;
    prod["add"] = numb1;
    console.log(prod);

    /* if (numb1 >= 0) {
      prod["reste"] = numb1;
    }
    if (numb < 0) {
      prod["reste"] = numb1;
      prod["add"] = numb1 - prod["quantity"];
    } else if (numb == 0) {
      prod["reste"] = numb1;
      prod["out"] = 0;
      prod["add"] = 0;
    } else if (numb && numb > 0) {
      if (numb && numb > 0) {
        prod["reste"] = numb1;
        prod["out"] = prod["quantity"] - numb1;
        prod["add"] = 0;
      } else {
      }
    } */

    let id = prod["key"];
    let storedItem = this.randomObj[id];
    if (!storedItem) {
      this.randomObj[id] = prod;
    } else {
      this.randomObj[id] = prod;
    }
    console.log(this.randomObj);
  }
  addMotif(ev, prod, i) {
    let motif = ev.target["value"];
    prod["addMotif"] = motif;
    let id = prod["key"];
    let storedItem = this.randomObj[id];
    if (!storedItem) {
      this.randomObj[id] = prod;
    } else {
      this.randomObj[id] = prod;
    }
    console.log(this.randomObj);
  }
  outIncrement(ev, prod, i) {
    let numb1 = parseInt(ev.target["value"]);
    prod["out"] = numb1;
  }
  outMotif(ev, prod, i) {
    let motif = ev.target["value"];
    prod["outMotif"] = motif;
    let id = prod["key"];
    let storedItem = this.randomObj[id];
    if (!storedItem) {
      this.randomObj[id] = prod;
    } else {
      this.randomObj[id] = prod;
    }
  }
  saveInventaire(prod) {
    let a = Object.keys(this.randomObj);
    let tab = [];
    let add = 0,
      out = 0,
      outMotif = "",
      addMotif = "";
    console.log(prod);
    if (prod["add"]) {
      add = prod["add"];
      if (prod["addMotif"]) {
        addMotif = prod["addMotif"];
      } else {
        addMotif = "";
      }
      delete prod.add;
      delete prod.addMotif;
    }
    if (prod["out"]) {
      out = prod["out"];
      if (prod["outMotif"]) {
        outMotif = prod["outMotif"];
      } else {
        outMotif = "";
      }
      delete prod.out;
      delete prod.outMotif;
    }
    let inventaire = {
      created: Date.now(),
      // inventaire: tab,
      outMotif: outMotif,
      addMotif: addMotif,
      out: out,
      add: add,
    };

    if (prod["tabInventaire"] && prod["tabInventaire"].length) {
      let tab = prod["tabInventaire"];
      tab.push(inventaire);
      prod["tabInventaire"] = tab;
    } else {
      let tab = [];
      tab.push(inventaire);
      prod["tabInventaire"] = tab;
    }

    /* for (const prop of a) {
      if (this.randomObj[prop]["reste"] && this.randomObj[prop]["reste"] >= 0) {
        this.randomObj[prop]["oldQuantity"] = this.randomObj[prop]["quantity"];
        this.randomObj[prop]["quantity"] = this.randomObj[prop]["reste"];
      } else if (
        this.randomObj[prop]["add"] &&
        this.randomObj[prop]["add"] >= 0
      ) {
        this.randomObj[prop]["oldQuantity"] = this.randomObj[prop]["quantity"];
        this.randomObj[prop]["quantity"] = this.randomObj[prop]["add"];
      } else {
        console.log(this.randomObj);
      }
      tab.push(this.randomObj[prop]);
    }*/
    /* let inventaire = {
      created: Date.now(),
      inventaire: tab,
    }; */
    console.log(prod);

    this.inventaireService.updateProdInventaire(prod).then((data) => {
      console.log(data);
      this.notif.presentToast();
    });
  }
  displayInventaire() {
    this.inventaireFlag = !this.inventaireFlag;
  }
  openProdInventaire(prod) {
    /* if (prod.open) {
      prod.open = false;
    } else {
      prod.open = true;
    } */
    this.inventaireService.setData(prod);
    this.router.navigateByUrl("view-inventaire");
  }
}
