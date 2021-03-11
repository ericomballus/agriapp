import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Materiel } from "../../models/materiel.model";
import { MaterielService } from "src/app/services/materiel.service";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebsase from "firebase";
import { NotificationService } from "src/app/services/notification.service";
import { Router } from "@angular/router";
import { TrackingService } from "src/app/services/tracking.service";
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
  tabRole = [];
  constructor(
    public formBuilder: FormBuilder,
    public materielService: MaterielService,
    private database: AngularFireDatabase,
    private notif: NotificationService,
    public router: Router,
    public tracking: TrackingService
  ) {
    this.getActivitieName();
  }

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
      this.tracking.postTrackingToFirebase("page nom activité", url);
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
    let tabRole = JSON.parse(localStorage.getItem("tabRole"));
    if (tabRole.includes(1) || tabRole.includes(2) || tabRole.includes(3)) {
      this.notif.presentError(
        "vous n'avez pas les autorisations necéssaires pour cette action",
        "danger"
      );
    } else {
      this.database.list("/agriActivitiName").remove(row["key"]);
    }
  }
}
