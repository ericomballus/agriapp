import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { NotificationService } from "src/app/services/notification.service";
import firebase from "firebase/app";
import "firebase/storage";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-paye-maindoeuvre",
  templateUrl: "./paye-maindoeuvre.page.html",
  styleUrls: ["./paye-maindoeuvre.page.scss"],
})
export class PayeMaindoeuvrePage implements OnInit {
  @Input() user: any;
  @Input() activity: any;
  @Input() hello: string;
  montant = 0;
  file2: any;
  photoURL2: string;
  @ViewChild("fileButton2", { static: false }) fileButton2;
  constructor(
    public modalController: ModalController,
    public activitiService: ActivitiesApiService,
    public notif: NotificationService,
    public userService: UserService
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  galerie2() {
    this.fileButton2.nativeElement.click();
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
  }
  saveMainDoeuvre() {
    console.log(this.file2);
    console.log(this.montant);
    this.notif.presentLoading();
    let sum = 0;
    let cout_maindoeuvre = parseInt(this.activity["coutmaindoeuvre"]);
    this.activity["executant"].forEach((exe) => {
      console.log(exe);
      if (exe["maindoeuvreList"] && exe["maindoeuvreList"].length) {
        // sum = sum + exe["maindoeuvre"];
        exe["maindoeuvreList"].forEach((elt) => {
          sum = sum + elt["montant"];
        });
      }
    });
    if (sum > cout_maindoeuvre) {
      this.notif.dismmisLoading();
      this.notif.presentMessage("impossible d'effectuer cette opération");
      this.user["maindoeuvre"] = 0;
    } else {
      this.enregistrerImageFirebase(this.file2).then((url) => {
        console.log("hello");

        let data = {
          montant: this.montant,
          created: Date.now(),
          url: url,
          activityKey: this.activity["key"],
        };
        if (
          this.user["maindoeuvreList"] &&
          this.user["maindoeuvreList"].length
        ) {
          // sum = sum + exe["maindoeuvre"];
          this.user["maindoeuvreList"].push(data);
        } else {
          let tab = [];
          tab.push(data);
          this.user["maindoeuvreList"] = tab;
        }
        let index = this.activity["executant"].findIndex((exe) => {
          return exe["key"] == this.user["key"];
        });
        console.log(index);

        if (index >= 0) {
          console.log("hello===");

          this.activity["executant"].splice(index, 1, this.user);
          this.activitiService
            .updateData(this.activity)
            .then((res) => {
              console.log(res);
              this.notif.dismmisLoading();
              this.notif.presentToast();
              this.modalController.dismiss({
                dismissed: true,
                activity: this.activity,
                user: this.user,
              });
              this.updatEmploye(this.user);
              // this.faireLeBilan();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    }
  }

  enregistrerImageFirebase(file): Promise<string> {
    console.log(file);

    return new Promise((resolve, reject) => {
      var storageRef = firebase.storage().ref("/agriApp/" + file.name);
      var task = storageRef.put(file);
      task
        .then((data) => {
          console.log("data");
          storageRef
            .getDownloadURL()
            .then((url) => {
              console.log("url", url);
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
  updatEmploye(employe) {
    this.userService.updateUser(employe).then((res) => {
      console.log("update employe", res);

      //this.notif.presentMessage("mise a jour effectué!!");
    });
  }
}
