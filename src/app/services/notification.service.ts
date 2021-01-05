import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { LoadingController } from "@ionic/angular";
@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Your settings have been saved.",
      duration: 2000,
      position: "top",
      color: "success",
      animated: true,
    });
    toast.present();
  }

  async presentMessage(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "top",
      color: "success",
      animated: true,
    });
    toast.present();
  }

  async presentError(msg, color) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 6000,
      position: "top",
      color: color,
      animated: true,
    });
    toast.present();
  }

  async onlineAlert() {
    const toast = await this.toastController.create({
      message: "Your are online.",
      duration: 2000,
      position: "top",
      color: "warning",
      animated: true,
    });
    toast.present();
  }

  async offlineAlert() {
    const toast = await this.toastController.create({
      message: "Your are offline.check your internet connection",
      duration: 2000,
      position: "top",
      animated: true,
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Please wait...",
      duration: 5000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed!");
  }
  async dismmisLoading() {
    this.loadingController.dismiss();
  }
}
