import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebsase from "firebase";
import { BehaviorSubject } from "rxjs";
import { NetworkService } from "./network.service";
@Injectable({
  providedIn: "root",
})
export class MaterielService {
  url = "http://localhost:3000/";
  materiel = new BehaviorSubject([]);
  materielIventaire = new BehaviorSubject([]);
  activitie = new BehaviorSubject([]);
  activitieIventaire = new BehaviorSubject([]);
  constructor(
    private http: HttpClient,
    private database: AngularFireDatabase,
    private networkService: NetworkService
  ) {}

  postMateriel(data) {
    data["firebaseAdd"] = false;
    return this.http.post(this.url + `materiel`, data);
  }
  upadteMaterielFirebaseStatus(data) {
    // data["firebaseAdd"] = false;
    return this.http.patch(this.url + `materiel/firebaseAdd`, data);
  }
  upadteMateriel(data) {
    // data["firebaseAdd"] = false;
    return this.http.patch(this.url + `materiel/`, data);
  }
  deleteMateriel(data) {
    // data["firebaseAdd"] = false;
    return this.http.delete(this.url + `materiel/firebaseAdd/${data._id}`);
  }

  postMaterielToFirebase(materiel) {
    return new Promise((resolve, reject) => {
      let database = this.database.list("agriMatriels");
      database
        .push(materiel)
        .then((b) => {
          resolve(b);
        })
        .catch((error) => {
          reject(JSON.stringify(error));
        });
    });
  }

  getMateriel() {
    let storage = JSON.parse(localStorage.getItem("equipement"));
    if (Array.isArray(storage) && storage.length) {
      this.materiel.next(storage);
    }
    this.database
      .list("/agriMatriels", (ref) =>
        ref.orderByChild("agriMatriels").limitToLast(20)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        let tab = [];

        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          tab.push(a);
        });
        this.materiel.next(tab);
        this.materielIventaire.next(tab);
        localStorage.setItem("equipement", JSON.stringify(tab));
      });
    return this.materiel;
    // return
    // return this.http.get(this.url + `materiel`);
  }

  getMaterielInventaire() {
    return this.materielIventaire;
    //return this.materiel;
    // return
    // return this.http.get(this.url + `materiel`);
  }

  getActivieNames() {
    let storage = JSON.parse(localStorage.getItem("activieName"));
    if (Array.isArray(storage) && storage.length) {
      this.activitie.next(storage);
    }
    this.database
      .list("/agriActivitiName", (ref) => ref.orderByChild("agriActivitiName"))
      .snapshotChanges()
      .subscribe((actions) => {
        let tab = [];

        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          tab.push(a);
        });
        this.activitie.next(tab);
        this.activitieIventaire.next(tab);
        localStorage.setItem("activieName", JSON.stringify(tab));
      });
    return this.activitie;
    // return
    // return this.http.get(this.url + `materiel`);
  }

  postActiviNameToFirebase(activitie) {
    return new Promise((resolve, reject) => {
      let database = this.database.list("agriActivitiName");
      database
        .push(activitie)
        .then((b) => {
          resolve(b);
        })
        .catch((error) => {
          reject(JSON.stringify(error));
        });
    });
  }
}
