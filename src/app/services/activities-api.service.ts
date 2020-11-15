import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import firebase from "firebase/app";

@Injectable({
  providedIn: "root",
})
export class ActivitiesApiService {
  url = "http://localhost:3000/";
  constructor(private http: HttpClient, private database: AngularFireDatabase) {
    let ref = firebase.database().ref("agriActivities");
    let a = ref
      .onDisconnect()
      .cancel()
      .then((res) => {
        console.log("we are offline!!");
      });
  }

  postActivitie(data) {
    data["firebaseAdd"] = false;
    return this.http.post(this.url + `activities`, data);
  }
  upadteActivitieFirebaseStatus(data) {
    // data["firebaseAdd"] = false;
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
    return this.http.get(this.url + `activities`);
  }
}
