import { Injectable } from "@angular/core";
import firebase from "firebase/app";
import { ToastController } from "@ionic/angular";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthentificationService {
  utilisateur: firebase.User;
  utilisateurSubject = new Subject<firebase.User>();

  constructor(public toastController: ToastController) {}

  emettre() {
    this.utilisateurSubject.next(this.utilisateur);
  }

  updateUser(utilisateur) {
    this.utilisateur = utilisateur;
    this.emettre();
  }

  connexion(login: string, passe: string): Promise<firebase.User> {
    return new Promise((resolve, reject) => {
      firebase
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
      firebase
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

  inscription(login: string, passe: string): Promise<firebase.User> {
    return new Promise((resolve, reject) => {
      firebase
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

  deleteUserEmail(login: string, passe: string): Promise<firebase.User> {
    return new Promise((resolve, reject) => {
      firebase
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
