import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Materiel } from "../../models/materiel.model";
import { MaterielService } from "src/app/services/materiel.service";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebsase from "firebase";
@Component({
  selector: "app-add-activitie-name",
  templateUrl: "./add-activitie-name.page.html",
  styleUrls: ["./add-activitie-name.page.scss"],
})
export class AddActivitieNamePage implements OnInit {
  ionicForm: FormGroup;
  // defaultDate = "1987-06-30";
  isSubmitted = false;
  errorControl: any;
  materielListTab: Array<Materiel>;
  constructor(
    public formBuilder: FormBuilder,
    public materielService: MaterielService,
    private database: AngularFireDatabase
  ) {
    this.getActivitieName();
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
      /*  price: [
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
      ], */
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
      this.materielService
        .postActiviNameToFirebase(emp)
        .then((res) => {
          console.log(res);
          this.isSubmitted = false;
          this.ionicForm.reset();
          // this.materielListTab.unshift(emp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  getActivitieName() {
    this.materielService.getActivieNames().subscribe(
      (data: Array<Materiel>) => {
        console.log(data);

        this.materielListTab = data;
      },
      (err) => {
        // this.getEquipementFromFirebase();
      }
    );
  }

  delete(row) {
    this.database.list("/agriActivitiName").remove(row["key"]);
  }
}
