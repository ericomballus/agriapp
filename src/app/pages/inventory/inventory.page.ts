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
import { DisplayImagePage } from "../display-image/display-image.page";
import { ModalController } from "@ionic/angular";
@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.page.html",
  styleUrls: ["./inventory.page.scss"],
})
export class InventoryPage implements OnInit {
  model: NgbDateStruct;
  date: { year: number; month: number };
  model2: NgbDateStruct;
  date2: { year: number; month: number };
  tabList = [];
  materielList = [];
  tabListActivitie = [];
  total_amount = 0;
  totalQty = 0;
  disabled = false;
  name: any;
  nameKey: any;
  isDisabled: boolean = false;
  nameActivitie: any;
  isActivitie: Boolean = false;
  activitieName = [];
  constructor(
    private materialService: MaterielService,
    public activitiService: ActivitiesApiService,
    public achatService: AchatService,
    private notif: NotificationService,
    private userService: UserService,
    private calendar: NgbCalendar,
    private database: AngularFireDatabase,
    private router: Router,
    public materielService: MaterielService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.model = this.calendar.getToday();
    this.model2 = this.calendar.getToday();
    this.getMat();
    this.getAchat();
    this.getActivitieName();
  }
  toggle() {
    this.disabled = !this.disabled;
  }
  getMat() {
    let tab = [];
    let group;
    let tabl = [];
    let resultat = [];
    setTimeout(() => {
      this.materialService
        .getMaterielInventaire()
        .pipe(
          mergeMap((v) =>
            from(v).pipe(
              groupBy((task) => task["name"]),
              mergeMap((group) => group.pipe(toArray()))
            )
          )
        )
        .subscribe((res) => {
          tab.push(res);
          console.log(res);
          console.log(tab);

          // tab.forEach(async (arr) => {
          res.reduce((r, a) => {
            //  r[a.name] = [...(r[a.name] || []), a];
            if (!r[a.name]) {
              r[a.name] = a;
              a.qty = 0;
              resultat.push(r[a.name]);
            }
            r[a.name].qty += a.quantity;
            return r;
          }, {});
          console.log(resultat);
          this.materielList = resultat;
        });
    });
  }

  getActivitieName() {
    this.materielService.getActivieNames().subscribe(
      (data: Array<any>) => {
        this.activitieName = data;
      },
      (err) => {
        // this.getEquipementFromFirebase();
      }
    );
  }

  getAct() {
    this.activitiService.getLastTenActivitie().subscribe(
      (data) => {},
      (err) => {}
    );
  }
  getAchat() {
    let tab = [];
    this.achatService
      .getAchatInventaire()
      .pipe(
        mergeMap((v) =>
          from(v).pipe(
            groupBy((task) => task["name"]),
            mergeMap((group) => group.pipe(toArray()))
          )
        )
      )
      .subscribe((res) => {
        console.log(res);
        this.tabList = res;
        this.tabList.forEach((elt) => {
          this.total_amount = this.total_amount + elt.quantity * elt.price;
          this.totalQty = this.totalQty + elt.quantity;
        });
      });
    /* .subscribe((res) => {
        // tab.push(res);
       console.log(res);
        this.tabList = res;
        this.tabList.forEach((elt) => {
          this.total_amount = this.total_amount + elt.quantity * elt.price;
          this.totalQty = this.totalQty + elt.quantity;
        });
      }); */
  }
  getUser() {
    this.userService.getAllUser().subscribe((res) => {});
  }

  selectByday() {
    this.notif.infiniteLoading();
    let tab = [];
    this.tabList = [];
    let day2 = this.model2.day + 1;
    let day1 = this.model.day;
    let debut = new Date(
      this.model.year + "-" + this.model.month + "-" + day1
    ).getTime();
    let fin = new Date(
      this.model2.year + "-" + this.model2.month + "-" + day2
    ).getTime();

    this.database
      .list("/agriAchats", (ref) =>
        ref.orderByChild("created").startAt(debut).endAt(fin)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        // console.log(actions);
        this.notif.dismmisLoading();
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;

          if (this.isDisabled) {
            if (
              a["name"].toLocaleLowerCase() === this.name.toLocaleLowerCase()
            ) {
              tab.push(a);
            }
          } else {
            tab.push(a);
          }
        });
        this.isDisabled = false;

        this.tabList = tab;
        this.total_amount = 0;
        this.totalQty = 0;
        this.tabList.forEach((elt) => {
          this.total_amount = this.total_amount + elt.quantity * elt.price;
          this.totalQty = this.totalQty + elt.quantity;
        });
      });
  }

  selectBydayActivitie() {
    let tab = [];
    this.tabList = [];
    let day2 = this.model2.day + 1;
    let day1 = this.model.day;
    let debut = new Date(
      this.model.year + "-" + this.model.month + "-" + day1
    ).getTime();
    let fin = new Date(
      this.model2.year + "-" + this.model2.month + "-" + day2
    ).getTime();
    console.log(debut);
    console.log(fin);

    this.database
      .list("/agriActivities", (ref) =>
        ref.orderByChild("created").startAt(debut).endAt(fin)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        // console.log(actions);
        console.log("hello");

        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          if (this.isActivitie) {
            if (
              a["name"].toLocaleLowerCase() ===
              this.nameActivitie.toLocaleLowerCase()
            ) {
              tab.push(a);
            }
          } else {
            tab.push(a);
          }
        });
        console.log(tab);
        this.isActivitie = false;
        this.tabListActivitie = tab;
        this.total_amount = 0;
        this.totalQty = 0;
        this.tabListActivitie.forEach((elt) => {
          console.log(elt);
          this.total_amount = this.total_amount + parseInt(elt["coutMateriel"]);
        });
      });
  }
  async presentModal(row) {
    console.log(row);
    this.activitiService.setData(row);
    this.router.navigateByUrl("instruction");
    /* const modal = await this.modalController.create({
      component: InstructionPage,
      cssClass: "my-custom-class",
      componentProps: {
        firstName: row,
        lastName: "Adams",
        middleInitial: "N",
      },
    });
    return await modal.present();*/
  }
  selectNameEvent(ev) {
    console.log(ev.detail.value);
    this.name = ev.detail.value.name;
    this.nameKey = ev.detail.value.key;
    this.isDisabled = true;
    /* tab.forEach((materiel) => {
      this.besoinMateriel = this.besoinMateriel + "," + materiel.name;
    }); */
  }
  selectActivitiNameEvent(ev) {
    this.nameActivitie = ev.detail.value.name;
    this.nameKey = ev.detail.value.key;
    this.isActivitie = true;
  }
  async zoomImage(elt) {
    this.userService.setImage(elt.url);
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
