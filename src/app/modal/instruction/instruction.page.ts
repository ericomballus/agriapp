import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { NotificationService } from "src/app/services/notification.service";
import firebase from "firebase/app";
import "firebase/storage";
import { AchatService } from "src/app/services/achat.service";
import { AlertController, ModalController } from "@ionic/angular";
import { UserService } from "src/app/services/user.service";
import { DisplayImagePage } from "src/app/pages/display-image/display-image.page";
import { PayeMaindoeuvrePage } from "../paye-maindoeuvre/paye-maindoeuvre.page";
import { DisplaymodalService } from "src/app/services/displaymodal.service";
import { DisplayUserMaindooeuvrePage } from "../display-user-maindooeuvre/display-user-maindooeuvre.page";
@Component({
  selector: "app-instruction",
  templateUrl: "./instruction.page.html",
  styleUrls: ["./instruction.page.scss"],
})
export class InstructionPage implements OnInit {
  //  @Input() data: Activities;
  activitie: any;
  montant = 0;
  @ViewChild("fileButton", { static: false }) fileButton;
  @ViewChild("fileButton2", { static: false }) fileButton2;
  file: any;
  photoURL: string;
  file2: any;
  photoURL2: string;
  videoURL: string;
  imageUrl: string;
  index: number;
  tabRole = [];
  total = 0;
  reste = 0;
  constructor(
    public activitiService: ActivitiesApiService,
    public notif: NotificationService,
    public router: Router,
    public achatService: AchatService,
    private userService: UserService,
    public modalService: DisplaymodalService,
    public modalController: ModalController,
    public alertController: AlertController
  ) {
    this.activitie = this.activitiService.getData();
    if (this.activitie.coutmaindoeuvre) {
      this.montant = this.montant + parseInt(this.activitie.coutmaindoeuvre);
    }
    if (this.activitie.materielList) {
      this.activitie.materielList.forEach((mat) => {
        this.montant = this.montant + parseInt(mat.price) * parseInt(mat.qty);
      });
    }
    this.faireLeBilan();
    this.montantPerçu();
  }

  ngOnInit() {}

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

  addQuantity(ev, elt) {
    if (parseInt(ev.detail.value) >= 0) {
      elt.qty = parseInt(ev.detail.value);
    }
  }
  Update() {
    console.log(this.activitie);
    this.activitie["confirm"] = true;
    this.activitiService
      .updateData(this.activitie)
      .then((res) => {
        console.log(res);
        this.notif.presentToast();
        this.router.navigateByUrl("created-activitie");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async UpdateWithFile() {
    console.log(this.activitie);
    this.notif.presentLoading();
    this.activitie["confirm"] = true;
    console.log("Start");
    let checker = this.activitie.materielList.length;
    let myEvent = 0;
    this.activitie.materielList.forEach(async (elt, i) => {
      elt["urlMateriel"] = await this.enregistrerImageFirebase(elt.file);
      elt["urlFacture"] = await this.enregistrerImageFirebase(elt.file2);
      console.log(elt["urlMateriel"]);
      console.log(elt["urlFacture"]);
      let mat = {
        name: this.activitie["materielList"][i]["name"],
        quantity: this.activitie["materielList"][i]["quantity"],
        price: this.activitie["materielList"][i]["price"],
        url: elt["urlMateriel"],
        created: Date.now(),
        activityKey: this.activitie["key"],
        activityName: this.activitie["name"],
      };

      let achat = await this.postAchat(mat);
      console.log("end achat", achat);
      myEvent = myEvent + 1;

      delete elt.file;
      delete elt.photoURL;
      delete elt.photoURL2;
      delete elt.file2;
      if (myEvent == checker) {
        this.activitiService
          .updateData(this.activitie)
          .then((res) => {
            console.log(res);
            console.log("end operation", this.activitie);
            this.notif.presentToast();
            this.router.navigateByUrl("created-activitie");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }
  Cancel() {
    this.activitie["confirm"] = false;
    this.activitie["cancel"] = true;
    this.activitiService
      .updateData(this.activitie)
      .then((res) => {
        this.notif.presentToast();
        this.router.navigateByUrl("created-activitie");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  galerie(i) {
    this.index = i;
    console.log(this.activitie.materielList[this.index]);
    this.fileButton.nativeElement.click();
  }
  galerie2(i) {
    this.index = i;
    console.log(this.activitie.materielList[this.index]);

    this.fileButton2.nativeElement.click();
  }
  uploadFile(event: any) {
    //photo du materiel
    this.file = event.target.files.item(0);
    this.activitie.materielList[this.index]["file"] = this.file;
    let theType = this.file.type.split("/");
    if (theType[0] == "image") {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          // this.photoURL = event.target.result;
          //photo du materiel
          this.activitie.materielList[this.index]["photoURL"] =
            event.target.result;
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
    //photo de la facture
    this.file2 = event.target.files.item(0);
    this.activitie.materielList[this.index]["file2"] = this.file2;
    let theType = this.file2.type.split("/");
    if (theType[0] == "image") {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          // this.photoURL2 = event.target.result;
          this.activitie.materielList[this.index]["photoURL2"] =
            event.target.result;
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

  postAchat(achat): Promise<string> {
    return new Promise((resolve, reject) => {
      this.achatService
        .postAchatToFirebase(achat)
        .then((res) => {
          resolve("ok");
          // this.ionicForm.reset();
          this.notif.presentToast();
        })
        .catch((err) => {
          reject("error");
        });
    });
  }

  async zoomImage(url) {
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
  async saveMaindeouvre(user) {
    const modal = await this.modalController.create({
      component: PayeMaindoeuvrePage,
      cssClass: "my-custom-class",
      backdropDismiss: false,
      componentProps: {
        user: user,
        activity: this.activitie,
      },
    });
    modal.onWillDismiss().then((data) => {
      console.log(data);
      if (data["data"] && data["data"]["activity"]) {
        this.activitie = data["data"]["activity"];
        this.faireLeBilan();
        this.montantPerçu();
        // this.router.navigateByUrl("projet");
      }
    });
    return await modal.present();
    /* console.log(user);
    let sum = 0;
    let cout_maindoeuvre = parseInt(this.activitie["coutmaindoeuvre"]);
    this.activitie["executant"].forEach((exe) => {
      console.log(exe);
      if (exe["maindoeuvre"]) {
        sum = sum + exe["maindoeuvre"];
      }
    });
    if (sum > cout_maindoeuvre) {
      this.notif.presentMessage("impossible d'effectuer cette opération");
      user["maindoeuvre"] = 0;
    } else {
      this.activitiService
        .updateData(this.activitie)
        .then((res) => {
          this.notif.presentToast();
          this.faireLeBilan();
        })
        .catch((err) => {
          console.log(err);
        });
    } */
  }

  faireLeBilan() {
    let sum = 0;
    /* this.activitie["executant"].forEach((exe) => {
      console.log(exe);
      if (exe["maindoeuvre"]) {
        sum = sum + exe["maindoeuvre"];
      }
    });*/
    this.activitie["executant"].forEach((exe) => {
      console.log(exe);
      if (exe["maindoeuvreList"] && exe["maindoeuvreList"].length) {
        // sum = sum + exe["maindoeuvre"];
        exe["maindoeuvreList"].forEach((elt) => {
          sum = sum + elt["montant"];
        });
      }
    });
    this.total = sum;
    this.reste = parseInt(this.activitie.coutmaindoeuvre) - sum;
  }
  montantPerçu() {
    this.activitie["executant"].forEach((exe) => {
      console.log(exe);
      if (exe["maindoeuvreList"] && exe["maindoeuvreList"].length) {
        // sum = sum + exe["maindoeuvre"];
        let sum = 0;
        exe["maindoeuvreList"].forEach((elt) => {
          if (elt["activityKey"] == this.activitie["key"]) {
            sum = sum + elt["montant"];
          }
        });
        exe["maindoeuvre"] = sum;
      } else {
        exe["maindoeuvre"] = 0;
      }
    });

    //  this.reste = parseInt(this.activitie.coutmaindoeuvre) - sum;
  }
  async voirPaiement(user) {
    const modal = await this.modalController.create({
      component: DisplayUserMaindooeuvrePage,
      cssClass: "my-custom-class",
      backdropDismiss: false,
      componentProps: {
        user: user,
        activity: this.activitie,
      },
    });
    modal.onWillDismiss().then((data) => {
      console.log(data);
      if (data["data"] && data["data"]["activity"]) {
        this.activitie = data["data"]["activity"];
        this.faireLeBilan();
        this.montantPerçu();
        // this.router.navigateByUrl("projet");
      }
    });
    return await modal.present();
  }
  async showMotif(user) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Motif suppression",
      message: `${user.motif}`,
      buttons: [
        {
          text: "Ok",
          handler: () => {
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();
  }
}
