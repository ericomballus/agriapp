import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import firebase from "firebase/app";
import { BehaviorSubject } from "rxjs";
import { isNullOrUndefined } from "util";
import { log } from "console";
import { resolve } from "dns";

@Injectable({
  providedIn: "root",
})
export class ActivitiesApiService {
  url = "http://localhost:3000/";
  activite = new BehaviorSubject([]);
  selectAtivitie: any;
  oneAtivitie: any;
  activitieList: any;
  constructor(private http: HttpClient, private database: AngularFireDatabase) {
    let ref = firebase.database().ref("agriActivities");
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

  setOneActivity(data) {
    this.oneAtivitie = data;
  }

  getOneActivity() {
    if (isNullOrUndefined(this.oneAtivitie)) {
      return 0;
    } else {
      return this.oneAtivitie;
    }
  }

  setActivitieList(data) {
    console.log(data);

    this.activitieList = data;
  }

  getActivitieList() {
    if (isNullOrUndefined(this.activitieList)) {
      return 0;
    } else {
      return this.activitieList;
    }
  }

  updateData(data) {
    let database = this.database.list("agriActivities");
    return database.update(data.key, data);
  }

  postActivitie(data) {
    data["firebaseAdd"] = false;
    return this.http.post(this.url + `activities`, data);
  }
  upadteActivitieFirebaseStatus(data) {
    return this.http.patch(this.url + `activities/firebaseAdd`, data);
  }

  postActivitieToFirebase(activitie) {
    console.log(activitie);
    return new Promise((resolve, reject) => {
      let database = this.database.list("agriActivities");
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

  getLastTenActivitie() {
    let storage = JSON.parse(localStorage.getItem("activite"));
    if (Array.isArray(storage) && storage.length) {
      this.activite.next(storage);
    }
    this.database
      .list("/agriActivities", (ref) =>
        ref.orderByChild("agriActivities").limitToLast(20)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        let tab = [];
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          tab.push(a);
        });
        this.activite.next(tab);
        localStorage.setItem("activite", JSON.stringify(tab));
      });
    return this.activite;
  }
  getActivitie(key) {
    return new Promise((resolve, reject) => {
      this.database
        .list("/agriActivities", (ref) => ref.orderByKey().equalTo(key))
        .snapshotChanges()
        .subscribe((actions) => {
          let tab = [];
          actions.forEach((action) => {
            let a = action.payload.val();
            a["key"] = action.key;
            tab.push(a);
          });
          resolve(tab);
        });
    });
  }

  getOneActivitie(ladate) {
    return new Promise((resolve, reject) => {
      this.database
        .list("/agriActivities", (ref) =>
          ref.orderByChild("created").equalTo(ladate)
        )
        .snapshotChanges()
        .subscribe((actions) => {
          let tab = [];
          actions.forEach((action) => {
            let a = action.payload.val();
            a["key"] = action.key;
            tab.push(a);
          });
          resolve(tab);
        });
      // return this.activite;
    });
  }

  getSpecificActivitie(projetName) {
    return new Promise((resolve, reject) => {
      this.database
        .list("/agriActivities", (ref) =>
          ref.orderByChild("projetName").equalTo(projetName)
        )
        .snapshotChanges()
        .subscribe((actions) => {
          let tab = [];
          actions.forEach((action) => {
            let a = action.payload.val();
            a["key"] = action.key;
            tab.push(a);
          });
          resolve(tab);
        });
      // return this.activite;
    });
  }
}
//nameKey
