import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebsase from "firebase";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TrackingService {
  connectionList = new BehaviorSubject([]);
  connectionListInventaire = new BehaviorSubject([]);
  constructor(private database: AngularFireDatabase) {}

  postTrackingToFirebase(page_name, path) {
    console.log(JSON.parse(localStorage.getItem("userAuth")));
    let { key, name } = JSON.parse(localStorage.getItem("userAuth"));
    let data = {
      userKey: key,
      userName: name,
      created: Date.now(),
      page_name: page_name,
      path: path,
    };
    return new Promise((resolve, reject) => {
      let database = this.database.list("agriTracking");
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

  getTrackingToFirebase() {
    this.database
      .list("/agriTracking", (ref) =>
        ref.orderByChild("agriTracking").limitToLast(20)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        let tab = [];
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          tab.push(a);
        });
        this.connectionList.next(tab);
        //this.achatListInventaire.next(tab);
      });

    return this.connectionList;
    // return
    // return this.http.get(this.url + `materiel`);
  }
}
