import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import firebase from "firebase/app";
import { BehaviorSubject } from "rxjs";
import { isNullOrUndefined } from "util";
import { log } from "console";

@Injectable({
  providedIn: "root",
})
export class ProjetApiService {
  url = "http://localhost:3000/";
  projet = new BehaviorSubject([]);
  newprojet: any;
  projetData: any;
  constructor(private http: HttpClient, private database: AngularFireDatabase) {
    let ref = firebase.database().ref("agriProjet");
    let a = ref
      .onDisconnect()
      .cancel()
      .then((res) => {
        console.log("we are offline!!");
      });
  }

  setData(data) {
    this.newprojet = data;
  }

  getData() {
    if (isNullOrUndefined(this.newprojet)) {
      return 0;
    } else {
      return this.newprojet;
    }
  }
  setProjet(data) {
    console.log(data);
    this.projetData = data;
  }

  getProjet() {
    if (isNullOrUndefined(this.projetData)) {
      return 0;
    } else {
      return this.projetData;
    }
  }

  updateData(data) {
    let database = this.database.list("agriProjet");
    return database.update(data.key, data);
  }

  postActi(data) {
    data["firebaseAdd"] = false;
    return this.http.post(this.url + `activities`, data);
  }
  upadteActivitieFirebaseStatus(data) {
    return this.http.patch(this.url + `activities/firebaseAdd`, data);
  }

  postPorjetToFirebase(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      let database = this.database.list("agriProjet");
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

  getLastTenPorjet() {
    let storage = JSON.parse(localStorage.getItem("projet"));
    if (Array.isArray(storage) && storage.length) {
      this.projet.next(storage);
    }
    this.database
      .list("/agriProjet", (ref) =>
        ref.orderByChild("agriProjet").limitToLast(20)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        let tab = [];
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          tab.push(a);
        });
        this.projet.next(tab);
        localStorage.setItem("projet", JSON.stringify(tab));
      });
    return this.projet;
  }
}
