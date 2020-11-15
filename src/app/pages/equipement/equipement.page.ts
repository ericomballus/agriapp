import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Materiel } from "../../models/materiel.model";
import { MaterielService } from "src/app/services/materiel.service";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebsase from "firebase";

@Component({
  selector: "app-equipement",
  templateUrl: "./equipement.page.html",
  styleUrls: ["./equipement.page.scss"],
})
export class EquipementPage implements OnInit {
  ionicForm: FormGroup;
  // defaultDate = "1987-06-30";
  isSubmitted = false;

  materielListTab: Array<Materiel>;
  constructor(
    public formBuilder: FormBuilder,
    public materielService: MaterielService,
    private database: AngularFireDatabase
  ) {
    this.getMateriel();
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
        }
      );
    }
  }
  getMateriel() {
    this.materielService.getMateriel().subscribe(
      (data: Array<Materiel>) => {
        console.log(data);

        this.materielListTab = data;
        this.getEquipementFromFirebase();
      },
      (err) => {
        this.getEquipementFromFirebase();
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

    this.materielService.deleteMateriel(row).subscribe((res) => {
      console.log(res);

      this.materielListTab = this.materielListTab.filter((elt) => {
        return elt._id !== row._id;
      });
    });
  }

  getEquipementFromFirebase() {
    this.database
      //.list("agriActivities")
      .list("/agriMatriels", (ref) =>
        ref.orderByChild("agriMatriels").limitToLast(20)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        console.log(actions);

        let tab = [];
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          console.log(a);
          tab.push(a);
        });
        /* if (this.activitiesTab.length) {
          tab.forEach((act) => {
            this.activitiesTab.forEach((elt) => {
              if (elt._id == act._id) {
                this.remplaceActivitie(act);
              }
            });
          });
        } */
      });
  }
}
