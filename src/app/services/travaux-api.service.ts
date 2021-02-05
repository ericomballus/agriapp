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
export class TravauxApiService {
  url = "http://localhost:3000/";
  travaux = new BehaviorSubject([]);
  selectAtivitie: any;
  activitieList: any;
  constructor(private http: HttpClient, private database: AngularFireDatabase) {
    let ref = firebase.database().ref("agriTravaux");
    let a = ref
      .onDisconnect()
      .cancel()
      .then((res) => {
        console.log("we are offline!!");
      });
  }

  setData(data) {
    this.selectAtivitie = data;
  }

  getData() {
    if (isNullOrUndefined(this.selectAtivitie)) {
      return 0;
    } else {
      return this.selectAtivitie;
    }
  }

  setActivitieList(data) {
    console.log(data);

    this.activitieList = data;
  }

  getList() {
    if (isNullOrUndefined(this.activitieList)) {
      return 0;
    } else {
      return this.activitieList;
    }
  }

  updateData(data) {
    let database = this.database.list("agriTravaux");
    return database.update(data.key, data);
  }

  postActi(data) {
    data["firebaseAdd"] = false;
    return this.http.post(this.url + `activities`, data);
  }
  upadteActivitieFirebaseStatus(data) {
    return this.http.patch(this.url + `activities/firebaseAdd`, data);
  }

  postTravauxToFirebase(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      let database = this.database.list("agriTravaux");
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

  getLastTenTravaux() {
    let storage = JSON.parse(localStorage.getItem("travaux"));
    if (Array.isArray(storage) && storage.length) {
      this.travaux.next(storage);
    }
    this.database
      .list("/agriTravaux", (ref) =>
        ref.orderByChild("agriTravaux").limitToLast(20)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        let tab = [];
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          tab.push(a);
        });
        this.travaux.next(tab);
        localStorage.setItem("travaux", JSON.stringify(tab));
      });
    return this.travaux;
  }
}
