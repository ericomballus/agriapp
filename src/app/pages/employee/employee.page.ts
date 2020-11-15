import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Employe } from "../../models/employe.model";
import { UserService } from "src/app/services/user.service";
import { ToastController } from "@ionic/angular";
import { AngularFireDatabase } from "@angular/fire/database";
import { AuthentificationService } from "src/app/services/authentification.service";
@Component({
  selector: "app-employee",
  templateUrl: "./employee.page.html",
  styleUrls: ["./employee.page.scss"],
})
export class EmployeePage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;
  userList = [];
  constructor(
    public formBuilder: FormBuilder,
    public userService: UserService,
    public toastController: ToastController,
    private database: AngularFireDatabase,
    public auth: AuthentificationService //
  ) {
    this.getEmployees();
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
      poste: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      //dob: [this.defaultDate],
      mobile: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
    });
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get("dob").setValue(date, {
      onlyself: true,
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log("Please provide all the required values!");
      return false;
    } else {
      console.log(this.ionicForm.value);
      let emp = this.ionicForm.value;
      let employe = new Employe(emp.name, emp.poste, emp.email, emp.mobile);
      console.log(employe);
      this.auth.inscription(employe.email, "hellohello123").then((res) => {
        console.log(res);
        this.userService.addUserToFirebase(employe).then((data) => {
          this.notifier("employé ajouté");
        });
      });

      this.ionicForm.value.name = "";
    }
  }
  getEmployees() {
    this.database
      .list("agriUser")
      .snapshotChanges(["child_added"])
      .subscribe((actions) => {
        let tab = [];
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          console.log(a);

          let index = this.userList.findIndex((elt) => {
            return elt.key === a["key"];
          });
          if (index >= 0) {
            console.log("existe");
          } else {
            tab.push(a);
          }
        });
        this.userList = tab;
        console.log(this.userList);
      });
  }
  async notifier(texte: string) {
    const toast = await this.toastController.create({
      message: texte,
      duration: 5000,
      animated: true,
      position: "top",
    });
    toast.present();
  }

  removeEmploye(user) {
    console.log(user);
    this.database
      .list("agriUser")
      .remove(user.key)
      .then((res) => {
        this.getEmployees();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
