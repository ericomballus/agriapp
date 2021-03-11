import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Employe } from "../../models/employe.model";
import { UserService } from "src/app/services/user.service";
import { ToastController } from "@ionic/angular";
import { AngularFireDatabase } from "@angular/fire/database";
import { AuthentificationService } from "src/app/services/authentification.service";
import firebase from "firebase/app";
import "firebase/storage";
import { NotificationService } from "src/app/services/notification.service";
import { Router } from "@angular/router";
import { ManagerInventoryPage } from "../manager-inventory/manager-inventory.page";
import { TrackingService } from "src/app/services/tracking.service";
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
  allEmployee = [];
  @ViewChild("fileButton", { static: false }) fileButton;
  @ViewChild("fileButton2", { static: false }) fileButton2;
  file: any;
  photoURL: string;
  file2: any;
  photoURL2: string;
  videoURL: string;
  imageUrl: string;
  userRole: number;
  type_employe: String;
  disableField = false;
  tabRole = [];
  roles = [
    { name: "Admin", id: 0 },
    { name: "Manager", id: 1 },
    { name: "Warehouseman", id: 2 },
    { name: "Other", id: 3 },
  ];
  opts = {
    slidesPerView: 4.5,
    spaceBetween: 10,
    slidesOffsetBefore: 0,
  };
  constructor(
    public formBuilder: FormBuilder,
    public userService: UserService,
    public toastController: ToastController,
    private database: AngularFireDatabase,
    public auth: AuthentificationService,
    public notif: NotificationService,
    public router: Router,
    public tracking: TrackingService
  ) {}
  ionViewWillEnter() {
    console.log(JSON.parse(localStorage.getItem("tabRole")));
    this.tabRole = JSON.parse(localStorage.getItem("tabRole"));
    if (
      // this.tabRole.includes(1) ||
      this.tabRole.includes(2) ||
      this.tabRole.includes(3)
    ) {
      const url = this.router.url;
      this.router.navigateByUrl("home");
      this.notif.presentError(
        "vous n'avez pas les autorisations necéssaires pour cette page",
        "danger"
      );
      this.tracking.postTrackingToFirebase("page employé", url);
    } else {
      this.getEmployees();
    }
    if (this.tabRole.includes(1)) {
      this.disableField = true;
      this.roles = [
        //  { name: "Admin", id: 0 },
        // { name: "Manager", id: 1 },
        { name: "Warehouseman", id: 2 },
        { name: "Other", id: 3 },
      ];
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
      password: [
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
      salaire: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
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

  async submitForm() {
    this.notif.presentLoading();
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log("Please provide all the required values!");
      return false;
    } else {
      console.log(this.ionicForm.value);
      let photoUser = await this.enregistrerImageFirebase(this.file);
      let cniUser = await this.enregistrerImageFirebase(this.file);
      let emp = this.ionicForm.value;
      emp["photoUser"] = photoUser;
      emp["cniUser"] = cniUser;
      let employe = new Employe(
        emp.name,
        emp.poste,
        emp.email,
        emp.mobile,
        emp.photoUser,
        emp.cniUser,
        emp.password,
        emp.salaire
      );
      console.log(employe);
      if (this.userRole) {
        employe.tabRole.push(this.userRole);
      }

      if (this.type_employe) {
        employe["typ_employe"] = this.type_employe;
      }
      this.auth.inscription(employe.email, employe.password).then((res) => {
        console.log(res);
        delete employe.password;
        employe.status = 2;
        this.userService.addUserToFirebase(employe).then((data) => {
          this.notifier("employé ajouté");
          this.ionicForm.reset();
        });
      });
    }
  }
  //hellohello123
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
          tab.push(a);
          /* let index = this.userList.findIndex((elt) => {
            return elt.key === a["key"];
          });
          if (index >= 0) {
            console.log("existe");
            if (this.userList.length) {
              // this.userList.push(a);
            }
          } else {
            if (this.userList.length) {
              this.userList.push(a);
            }
           
          } */
        });
        console.log(this.userList);
        this.userList = tab;
        this.allEmployee = tab;
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
    if (this.disableField) {
      this.notif.presentError(
        "vous n'avez pas les autorisations necéssaires pour cette action",
        "danger"
      );
      const url = this.router.url;
      this.tracking.postTrackingToFirebase(
        "page achat",
        `tentative suppresion ${user.name}`
      );
    } else {
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
  updateEmploye(user) {
    if (this.disableField) {
      this.notif.presentError(
        "vous n'avez pas les autorisations necéssaires pour cette action",
        "danger"
      );
      const url = this.router.url;
      this.tracking.postTrackingToFirebase(
        "page achat",
        `tentative modification des informations de ${user.name}`
      );
    } else {
      this.userService.setEmploye(user);
      this.router.navigateByUrl("update-employe");
    }
  }

  galerie() {
    this.fileButton.nativeElement.click();
  }
  galerie2() {
    this.fileButton2.nativeElement.click();
  }
  uploadFile(event: any) {
    this.file = event.target.files.item(0);
    let theType = this.file.type.split("/");
    if (theType[0] == "image") {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.photoURL = event.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }

    if (theType[0] == "video") {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.videoURL = event.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }
  uploadFile2(event: any) {
    this.file2 = event.target.files.item(0);
    let theType = this.file2.type.split("/");
    if (theType[0] == "image") {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.photoURL2 = event.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }

    if (theType[0] == "video") {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.videoURL = event.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }

  enregistrerImageFirebase(file): Promise<string> {
    return new Promise((resolve, reject) => {
      var storageRef = firebase.storage().ref("/agriApp/" + file.name);
      var task = storageRef.put(file);
      task
        .then((data) => {
          console.log("data");

          storageRef
            .getDownloadURL()
            .then((url) => {
              resolve(url);
            })
            .catch((e) => {
              reject(e);
            });
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  selectEvent(ev) {
    console.log(ev.detail.value);
    this.userRole = ev.detail.value.id;

    /* tab.forEach((materiel) => {
      this.besoinMateriel = this.besoinMateriel + "," + materiel.name;
    }); */
  }
  typeEmploye(ev) {
    console.log(ev.detail.value);
    this.type_employe = ev.detail.value;
  }

  segmentChanged(ev: any) {
    console.log("Segment changed", ev.detail.value);
    let choice = ev.detail.value;
    if (choice == "temporaire") {
      this.userList = this.allEmployee.filter((emp) => {
        return emp["typ_employe"] == "temporaire";
      });
    } else {
      this.userList = this.allEmployee.filter((emp) => {
        return emp["typ_employe"] != "temporaire";
      });
    }
  }
}
