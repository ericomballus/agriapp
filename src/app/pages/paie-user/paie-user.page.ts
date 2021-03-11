import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  AlertController,
  LoadingController,
  ModalController,
} from "@ionic/angular";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
import { UserService } from "src/app/services/user.service";
import { NotificationService } from "src/app/services/notification.service";
@Component({
  selector: "app-paie-user",
  templateUrl: "./paie-user.page.html",
  styleUrls: ["./paie-user.page.scss"],
})
export class PaieUserPage implements OnInit {
  @Input() name: string;
  @Input() user: any;
  @ViewChild("fileButton", { static: false }) fileButton;
  file: any;
  photoURL: string;
  videoURL: string;
  imageUrl: string;
  salaire = 0;
  mois_de_paiment: any;
  type_de_paiement: String;
  month_name: String;
  constructor(
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    private userService: UserService,
    public alertController: AlertController,
    public notif: NotificationService
  ) {
    this.user = this.userService.getEmploye();
    console.log(this.user);
  }

  ngOnInit() {}
  dismiss(data?) {
    if (data) {
      this.user = data;
    }
    this.modalCtrl.dismiss({
      dismissed: true,
      file: this.file,
      user: this.user,
    });
  }

  galerie() {
    this.fileButton.nativeElement.click();
  }

  uploadFile(event: any) {
    console.log(event.target.files);
    this.file = event.target.files.item(0);
    console.log(this.file.type);
    let theType = this.file.type.split("/");
    console.log(theType);
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
  enregistrerImageFirebase() {
    let dat = new Date(this.mois_de_paiment);
    let queryMonth = dat.getMonth() + 1;
    let queryYear = dat.getFullYear();
    let tabSum = [];
    if (this.user["salaireList"] && this.user["salaireList"].length) {
      tabSum = this.user["salaireList"].filter((sal) => {
        return sal.mois == queryMonth && sal.year == queryYear;
      });
      /* let index = this.user["salaireList"].findIndex((elt) => {
        return elt.mois == queryMonth && elt.year == queryYear;
      }); */
      // if (index >= 0) {
      if (tabSum.length) {
        // let sum=
        console.log(tabSum);
        let lastAvance = 0;
        let sum = 0;
        tabSum.forEach((elt) => {
          console.log(elt);

          sum = sum + elt["avance"];
        });
        console.log(sum);
        sum = sum + this.salaire;
        // let lastAvance = this.user["salaireList"][index]["avance"];
        // let sum = lastAvance + this.salaire;
        if (sum > this.user.salaire) {
          console.log("superieure");
          this.notif.presentError(
            "impossible de faire cette opération; le somme des avances est supérieur au salaire de cette employé",
            "danger"
          );
        } else {
          //  console.log("inferieure");
          this.paieInExistAvance(sum, this.salaire);
        }
      } else {
        if (parseInt(this.user.salaire) - this.salaire > 0) {
          this.presentAlertConfirm();
        } else {
          return new Promise((resolve, reject) => {
            this.presentLoading();
            var storageRef = firebase
              .storage()
              .ref("/agriApp/" + this.file.name);
            var task = storageRef.put(this.file);
            task
              .then((data) => {
                console.log("data");

                storageRef
                  .getDownloadURL()
                  .then((url) => {
                    let data = {};
                    if (parseInt(this.user.salaire) - this.salaire > 0) {
                      data = {
                        // salaire: this.salaire,
                        recu: this.salaire,
                        avance: this.salaire,
                        reste: parseInt(this.user.salaire) - this.salaire,
                        created: Date.now(),
                        signature: url,
                        mois_de_paiment: this.mois_de_paiment,
                        type_de_paiement: "avance",
                        mont_name: this.month_name,
                      };
                    } else {
                      let dat = new Date(this.mois_de_paiment);
                      data = {
                        salaire: this.salaire,
                        recu: this.salaire,
                        created: Date.now(),
                        signature: url,
                        mois_de_paiment: this.mois_de_paiment,
                        mois: dat.getMonth() + 1,
                        year: dat.getFullYear(),
                        type_de_paiement: "complet",
                        mont_name: this.month_name,
                      };
                    }

                    if (this.user["salaireList"]) {
                      this.user["salaireList"].push(data);
                    } else {
                      let tab = [data];
                      this.user["salaireList"] = tab;
                    }
                    this.userService
                      .addUserSalaire(this.user)
                      .then((res) => {
                        this.loadingController.dismiss();
                        this.dismiss(this.user);
                      })
                      .catch((e) => {
                        console.log(e);
                      });
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
      }
    } else {
      this.user["salaireList"] = [];

      let index = this.user["salaireList"].findIndex((elt) => {
        return elt.mois == queryMonth && elt.year == queryYear;
      });
      if (index >= 0) {
        console.log(index);
        let lastAvance = this.user["salaireList"][index]["avance"];
        let sum = lastAvance + this.salaire;
        if (sum > this.user.salaire) {
          console.log("superieure");
          this.notif.presentError(
            "impossible de faire cette opération",
            "danger"
          );
        } else {
          console.log("inferieure");
          this.paieInExistAvance(index, sum);
        }
      } else {
        if (parseInt(this.user.salaire) - this.salaire > 0) {
          this.presentAlertConfirm();
        } else {
          return new Promise((resolve, reject) => {
            this.presentLoading();
            var storageRef = firebase
              .storage()
              .ref("/agriApp/" + this.file.name);
            var task = storageRef.put(this.file);
            task
              .then((data) => {
                console.log("data");

                storageRef
                  .getDownloadURL()
                  .then((url) => {
                    let data = {};
                    if (parseInt(this.user.salaire) - this.salaire > 0) {
                      data = {
                        // salaire: this.salaire,
                        recu: this.salaire,
                        avance: this.salaire,
                        reste: parseInt(this.user.salaire) - this.salaire,
                        created: Date.now(),
                        signature: url,
                        mois_de_paiment: this.mois_de_paiment,
                        type_de_paiement: "avance",
                        mont_name: this.month_name,
                      };
                    } else {
                      let dat = new Date(this.mois_de_paiment);
                      data = {
                        salaire: this.salaire,
                        recu: this.salaire,
                        created: Date.now(),
                        signature: url,
                        mois_de_paiment: this.mois_de_paiment,
                        mois: dat.getMonth() + 1,
                        year: dat.getFullYear(),
                        type_de_paiement: "complet",
                        mont_name: this.month_name,
                      };
                    }

                    if (this.user["salaireList"]) {
                      this.user["salaireList"].push(data);
                    } else {
                      let tab = [data];
                      this.user["salaireList"] = tab;
                    }
                    this.userService
                      .addUserSalaire(this.user)
                      .then((res) => {
                        this.loadingController.dismiss();
                        this.dismiss(this.user);
                      })
                      .catch((e) => {
                        console.log(e);
                      });
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
      }
    }
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
      duration: 10000,
    });
    await loading.present();
  }

  selectDate(ev) {
    console.log(ev.target.value);
    this.mois_de_paiment = ev.target.value;
    let dat = new Date(this.mois_de_paiment);
    console.log(dat.getMonth() + 1);
    console.log(dat.getFullYear());
    let month = dat.getMonth() + 1;
    if (month == 1) {
      this.month_name = "janvier";
    }
    if (month == 2) {
      this.month_name = "février";
    }
    if (month == 3) {
      this.month_name = "mars";
    }
    if (month == 4) {
      this.month_name = "avril";
    }
    if (month == 5) {
      this.month_name = "mai";
    }
    if (month == 6) {
      this.month_name = "juin";
    }
    if (month == 7) {
      this.month_name = "juillet";
    }
    if (month == 8) {
      this.month_name = "aout";
    }
    if (month == 9) {
      this.month_name = "septembre";
    }
    if (month == 10) {
      this.month_name = "octobre";
    }
    if (month == 11) {
      this.month_name = "novembre";
    }
    if (month == 12) {
      this.month_name = "décembre";
    }
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Confirm!",
      message: "s'agit d'une avance de <strong>salaire</strong>!!!",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Okay",
          handler: () => {
            this.presentLoading();
            return new Promise((resolve, reject) => {
              var storageRef = firebase
                .storage()
                .ref("/agriApp/" + this.file.name);
              var task = storageRef.put(this.file);
              task
                .then((data) => {
                  console.log("data");

                  storageRef
                    .getDownloadURL()
                    .then((url) => {
                      let data = {};
                      let dat = new Date(this.mois_de_paiment);

                      data = {
                        // salaire: this.salaire,
                        recu: this.salaire,
                        avance: this.salaire,
                        reste: parseInt(this.user.salaire) - this.salaire,
                        created: Date.now(),
                        signature: url,
                        mois_de_paiment: this.mois_de_paiment,
                        type_de_paiement: "avance",
                        mois: dat.getMonth() + 1,
                        year: dat.getFullYear(),
                        mont_name: this.month_name,
                      };
                      if (this.user["salaireList"]) {
                        this.user["salaireList"].unshift(data);
                      } else {
                        let tab = [data];
                        this.user["salaireList"] = tab;
                      }
                      console.log(this.user);
                      this.userService
                        .addUserSalaire(this.user)
                        .then((res) => {
                          this.loadingController.dismiss();
                          this.dismiss(this.user);
                        })
                        .catch((e) => {
                          console.log(e);
                        });
                    })
                    .catch((e) => {
                      reject(e);
                    });
                })
                .catch((e) => {
                  reject(e);
                });
            });
          },
        },
      ],
    });

    await alert.present();
  }
  paieInExistAvance(sum, montant) {
    this.presentLoading();
    return new Promise((resolve, reject) => {
      var storageRef = firebase.storage().ref("/agriApp/" + this.file.name);
      var task = storageRef.put(this.file);
      task
        .then((data) => {
          console.log("data");

          storageRef
            .getDownloadURL()
            .then((url) => {
              let data = {};
              let dat = new Date(this.mois_de_paiment);
              if (montant < this.user.salaire) {
                data = {
                  recu: this.salaire,
                  avance: montant,
                  // reste: parseInt(this.user.salaire) - montant,
                  reste: parseInt(this.user.salaire) - sum,
                  created: Date.now(),
                  signature: url,
                  mois_de_paiment: this.mois_de_paiment,
                  type_de_paiement: "avance",
                  mois: dat.getMonth() + 1,
                  year: dat.getFullYear(),
                  mont_name: this.month_name,
                };
              } else {
                data = {
                  recu: this.salaire,
                  salaire: montant,
                  reste: parseInt(this.user.salaire) - montant,
                  created: Date.now(),
                  signature: url,
                  mois_de_paiment: this.mois_de_paiment,
                  type_de_paiement: "complet",
                  mois: dat.getMonth() + 1,
                  year: dat.getFullYear(),
                  mont_name: this.month_name,
                };
              }

              if (this.user["salaireList"]) {
                // this.user["salaireList"].splice(index, 1, data);

                this.user["salaireList"].unshift(data);
              }
              console.log(this.user);
              this.userService
                .addUserSalaire(this.user)
                .then((res) => {
                  this.loadingController.dismiss();
                  this.dismiss(this.user);
                })
                .catch((e) => {
                  console.log(e);
                });
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
  selectTypePaiment(ev) {
    console.log(ev.target.value);
    this.type_de_paiement = ev.target.value;
    if (this.type_de_paiement == "avance") {
      this.salaire = 0;
    }
    if (this.type_de_paiement == "complet") {
      this.salaire = this.user.salaire;
    }
  }
}
