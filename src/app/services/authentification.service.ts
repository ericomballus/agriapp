import { Injectable } from "@angular/core";
import * as firebsase from "firebase";
import { ToastController } from "@ionic/angular";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthentificationService {
  utilisateur: firebsase.User;
  utilisateurSubject = new Subject<firebsase.User>();

  constructor(public toastController: ToastController) {}

  emettre() {
    this.utilisateurSubject.next(this.utilisateur);
  }

  updateUser(utilisateur) {
    this.utilisateur = utilisateur;
    this.emettre();
  }

  connexion(login: string, passe: string): Promise<firebsase.User> {
    return new Promise((resolve, reject) => {
      firebsase
        .auth()
        .signInWithEmailAndPassword(login, passe)
        .then((credentials) => {
          const utilisateur = credentials.user;
          this.utilisateur = utilisateur;
          this.emettre();
          resolve(utilisateur);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  deconnexion(): Promise<any> {
    return new Promise((resolve, reject) => {
      firebsase
        .auth()
        .signOut()
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  inscription(login: string, passe: string): Promise<firebsase.User> {
    return new Promise((resolve, reject) => {
      firebsase
        .auth()
        .createUserWithEmailAndPassword(login, passe)
        .then((credentials) => {
          const utilisateur = credentials.user;
          this.utilisateur = utilisateur;
          this.emettre();
          resolve(utilisateur);
        });
    });
  }

  deleteUserEmail(login: string, passe: string): Promise<firebsase.User> {
    return new Promise((resolve, reject) => {
      firebsase
        .auth()
        .createUserWithEmailAndPassword(login, passe)
        .then((credentials) => {
          const utilisateur = credentials.user;
          this.utilisateur = utilisateur;
          this.emettre();
          resolve(utilisateur);
        });
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
}
