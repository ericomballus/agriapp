import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { ToastController } from "@ionic/angular";
import { Subject } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/database";

@Injectable({
  providedIn: "root",
})
export class AuthentificationService {
  utilisateur: firebase.User;
  utilisateurSubject = new Subject<firebase.User>();

  constructor(
    public toastController: ToastController,
    public auth: AngularFireAuth,
    private database: AngularFireDatabase
  ) {}

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
      //  firebase
      this.auth
        .createUserWithEmailAndPassword(login, passe)
        .then((credentials) => {
          const utilisateur = credentials.user;
          this.utilisateur = utilisateur;
          //  this.emettre();
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

  changeInitPassWord(data) {
    return new Promise((resolve, reject) => {
      let database = this.database.list("agriInitPassWord");
      database
        .push(data)
        .then((b) => {
          resolve(b);
        })
        .catch((error) => {
          reject(JSON.stringify(error));
        });
    });
  }

  getInitPassWord() {
    return new Promise((resolve, reject) => {
      this.database
        .list("/agriInitPassWord")
        .snapshotChanges()
        .subscribe((actions) => {
          if (!actions.length) {
            resolve(actions);
          } else {
            let tab = [];
            actions.forEach((action) => {
              let a = action.payload.val();
              a["key"] = action.key;
              tab.push(a);

              resolve(tab);
            });
          }
        });
    });
  }
  updateInitPassWord(data) {
    console.log(data);

    let database = this.database.list("agriInitPassWord");
    return database.update(data.key, data);
  }
}
