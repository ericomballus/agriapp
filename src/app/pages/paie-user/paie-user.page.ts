import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
import { UserService } from "src/app/services/user.service";
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
  constructor(
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    private userService: UserService
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
  enregistrerImageFirebase(): Promise<string> {
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
              let data = {
                salaire: this.salaire,
                created: Date.now(),
                signature: url,
              };
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
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
      duration: 2000,
    });
    await loading.present();
  }
}
