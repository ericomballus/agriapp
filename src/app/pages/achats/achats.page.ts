import { Component, OnInit, ViewChild } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { AchatService } from "src/app/services/achat.service";
import { MaterielService } from "src/app/services/materiel.service";
import { NotificationService } from "src/app/services/notification.service";
import { UserService } from "src/app/services/user.service";
import { Materiel } from "../../models/materiel.model";
import { DisplayImagePage } from "../display-image/display-image.page";
import firebase from "firebase/app";
import "firebase/storage";
import { Router } from "@angular/router";

@Component({
  selector: "app-achats",
  templateUrl: "./achats.page.html",
  styleUrls: ["./achats.page.scss"],
})
export class AchatsPage implements OnInit {
  isSubmitted = false;
  errorControl: any;
  materielListTab: Array<Materiel>;
  ionicForm: FormGroup;
  @ViewChild("fileButton", { static: false }) fileButton;
  file: any;
  photoURL: string;
  videoURL: string;
  imageUrl: string;
  choixMateriel: any;
  isDisabled: boolean = true;
  public disabled = false;
  materieList: any[] = [];
  tabList: any[] = [];
  tabRole = [];
  constructor(
    public formBuilder: FormBuilder,
    public achatService: AchatService,
    private database: AngularFireDatabase,
    private notif: NotificationService,
    private userService: UserService,
    public modalController: ModalController,
    public materielService: MaterielService,
    private router: Router
  ) {
    this.getMateriel();
    this.getAllMateriel();
  }
  ionViewWillEnter() {
    console.log(JSON.parse(localStorage.getItem("tabRole")));
    this.tabRole = JSON.parse(localStorage.getItem("tabRole"));
    if (this.tabRole.includes(2) || this.tabRole.includes(3)) {
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
      /* name: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ], */
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

  async submitForm() {
    this.isSubmitted = true;
    // console.log(this.ionicForm.value);
    if (!this.ionicForm.valid) {
      console.log("Please provide all the required values!");
      return false;
    } else {
      console.log(this.ionicForm.value);
      let emp = this.ionicForm.value;
      emp["created"] = Date.now();
      emp["name"] = this.choixMateriel;
      if (this.file) {
        emp["url"] = await this.enregistrerImageFirebase();
        this.achatService
          .postAchatToFirebase(emp)
          .then((res) => {
            console.log(res);
            this.ionicForm.reset();
            this.notif.presentToast();
          })
          .catch((err) => {});
      } else {
        this.achatService
          .postAchatToFirebase(emp)
          .then((res) => {
            console.log(res);
            this.ionicForm.reset();
            this.notif.presentToast();
          })
          .catch((err) => {});
      }
    }
  }
  getMateriel() {
    this.achatService.getAchat().subscribe(
      (data: Array<Materiel>) => {
        console.log(data);

        this.materielListTab = data;
      },
      (err) => {}
    );
  }

  delete(row: Materiel) {
    let tabRole = JSON.parse(localStorage.getItem("tabRole"));
    if (tabRole.includes(1) || tabRole.includes(2) || tabRole.includes(3)) {
      this.notif.presentError(
        "vous n'avez pas les autorisations necéssaires pour cette action",
        "danger"
      );
    } else {
      this.database
        //.list("agriActivities")
        .list("/agriAchats")
        .remove(row["key"]);
    }
  }

  handleInput(ev) {
    const val = ev.target.value;
    if (val) {
      this.database
        .list("/agriAchats", (ref) =>
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
          this.tabList = tab;
        });

      //firebase find

      if (val && val.trim() != "") {
      } else {
      }
    } else {
      this.tabList = [];
    }
  }
  Search(prod) {
    let client;
    if (client.length) {
    }
  }

  handleCancel(ev) {
    console.log(ev.target.value);
    // this.custumer["name"] = ev.target.value;
  }
  addOne(row) {}
  removeOne(row) {}

  galerie() {
    this.fileButton.nativeElement.click();
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
  async zoomImage() {
    this.userService.setImage(this.photoURL);
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

  enregistrerImageFirebase(): Promise<string> {
    return new Promise((resolve, reject) => {
      var storageRef = firebase.storage().ref("/agriApp/" + this.file.name);
      var task = storageRef.put(this.file);
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

  async zoomImage2(url) {
    this.userService.setImage(url);
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

  selectEvent(ev) {
    console.log(ev.detail.value);
    let tab = ev.detail.value;
    this.choixMateriel = ev.detail.value.name;
    this.isDisabled = false;
    /* tab.forEach((materiel) => {
      this.besoinMateriel = this.besoinMateriel + "," + materiel.name;
    }); */
  }

  getAllMateriel() {
    this.materielService.getMateriel().subscribe(
      (data: Array<any>) => {
        console.log(data);

        this.materieList = data;
        // this.getEquipementFromFirebase();
      },
      (err) => {
        // this.getEquipementFromFirebase();
      }
    );
  }
}
