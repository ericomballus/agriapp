import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Materiel } from "../../models/materiel.model";
import { MaterielService } from "src/app/services/materiel.service";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebsase from "firebase";
import { Router } from "@angular/router";
import { NotificationService } from "src/app/services/notification.service";

@Component({
  selector: "app-equipement",
  templateUrl: "./equipement.page.html",
  styleUrls: ["./equipement.page.scss"],
})
export class EquipementPage implements OnInit {
  ionicForm: FormGroup;
  // defaultDate = "1987-06-30";
  isSubmitted = false;
  errorControl: any;
  tabRole = [];
  materielListTab: Array<Materiel>;
  constructor(
    public formBuilder: FormBuilder,
    public materielService: MaterielService,
    private database: AngularFireDatabase,
    public notif: NotificationService,
    public router: Router
  ) {
    this.getMateriel();
  }
  ionViewWillEnter() {
    console.log(JSON.parse(localStorage.getItem("tabRole")));
    this.tabRole = JSON.parse(localStorage.getItem("tabRole"));
    if (
      this.tabRole.includes(1) ||
      this.tabRole.includes(2) ||
      this.tabRole.includes(3)
    ) {
      this.router.navigateByUrl("home");
      this.notif.presentError(
        "vous n'avez pas les autorisations necéssaires pour cette page",
        "danger"
      );
    } else {
    }
  }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      price: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1000),
        ],
      ],

      quantity: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1000),
        ],
      ],
    });
  }

  submitForm() {
    this.isSubmitted = true;
    // console.log(this.ionicForm.value);
    if (!this.ionicForm.valid) {
      console.log("Please provide all the required values!");
      return false;
    } else {
      console.log(this.ionicForm.value);
      let emp = this.ionicForm.value;
      emp["created"] = Date.now();
      this.materielService.postMateriel(this.ionicForm.value).subscribe(
        (result: Materiel) => {
          console.log(result);
          this.materielListTab.unshift(result);
          this.isSubmitted = false;
          this.ionicForm.reset();
          // this.getActivities();
          this.materielService
            .postMaterielToFirebase(result)
            .then((res) => {
              console.log(res);
              this.updateMaterielStatus({
                id: result["_id"],
                status: true,
              });
            })
            .catch((err) => {
              console.log(err);
              this.updateMaterielStatus({
                id: result["_id"],
                status: false,
              });
            });
        },
        (err) => {
          console.log(err);
          this.materielService
            .postMaterielToFirebase(emp)
            .then((res) => {
              this.ionicForm.reset();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
    }
  }
  getMateriel() {
    this.materielService.getMateriel().subscribe(
      (data: Array<Materiel>) => {
        console.log(data);

        this.materielListTab = data;
        // this.getEquipementFromFirebase();
      },
      (err) => {
        // this.getEquipementFromFirebase();
      }
    );
  }
  updateMaterielStatus(data) {
    this.materielService
      .upadteMaterielFirebaseStatus(data)
      .subscribe((data) => {
        console.log(data);
      });
  }

  removeOne(row: Materiel) {
    if (row.quantity > 0) {
      row.quantity = row.quantity - 1;
      this.materielService.upadteMateriel(row).subscribe((res) => {
        console.log(res);
      });
    }
  }
  addOne(row: Materiel) {
    row.quantity = row.quantity + 1;
    this.materielService.upadteMateriel(row).subscribe((res) => {
      console.log(res);
    });
  }
  delete(row: Materiel) {
    console.log(row);
    this.database
      //.list("agriActivities")
      .list("/agriMatriels")
      .remove(row["key"]);
    /* this.materielService.deleteMateriel(row).subscribe((res) => {
      console.log(res);

      this.materielListTab = this.materielListTab.filter((elt) => {
        return elt._id !== row._id;
      });
    }); */
  }

  getEquipementFromFirebase() {
    let storage = JSON.parse(localStorage.getItem("equipement"));
    // this.materielListTab= storage
    if (Array.isArray(storage)) {
      this.materielListTab = storage;
    }
    this.database
      //.list("agriActivities")
      .list("/agriMatriels", (ref) =>
        ref.orderByChild("agriMatriels").limitToLast(20)
      )
      .snapshotChanges()
      .subscribe(
        (actions) => {
          let tab = [];
          actions.forEach((action) => {
            let a = action.payload.val();
            a["key"] = action.key;
            console.log(a);
            tab.push(a);
          });
          this.materielListTab = tab;
          localStorage.setItem("equipement", JSON.stringify(tab));
        },
        (err) => {
          console.log("error");
        }
      );
  }

  handleInput(ev) {
    // console.log("debouce time");
    const val = ev.target.value;

    this.database
      .list("/agriMatriels", (ref) =>
        ref
          .orderByChild("name")
          .startAt(val)
          .endAt(val + "\uf8ff")
      )
      .snapshotChanges()
      .subscribe((actions) => {
        // console.log(actions);
        let tab = [];
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          tab.push(a);
        });
        console.log(tab);
      });

    //firebase find

    if (val && val.trim() != "") {
      // this.isItemAvailable = true;
      /*  this.custumers = this.custumerTab2.filter((item) => {
        return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
     */
    } else {
      // this.isItemAvailable = false;
      //this.custumersList = [];
    }
  }
  Search(prod) {
    // this.isItemAvailable = false;

    let client;
    /* client = this.custumerTab.filter((item) => {
      return item["nomclient"] == prod;
    }); */
    //console.log(client);
    if (client.length) {
    }
  }

  handleCancel(ev) {
    console.log(ev.target.value);
    // this.custumer["name"] = ev.target.value;
  }
}
