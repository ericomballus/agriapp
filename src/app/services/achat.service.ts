import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebsase from "firebase";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AchatService {
  achatList = new BehaviorSubject([]);
  achatListInventaire = new BehaviorSubject([]);
  constructor(private database: AngularFireDatabase) {}

  postAchatToFirebase(achat) {
    return new Promise((resolve, reject) => {
      let database = this.database.list("agriAchats");
      database
        .push(achat)
        .then((b) => {
          resolve(b);
        })
        .catch((error) => {
          reject(JSON.stringify(error));
        });
    });
  }

  getAchat() {
    let storage = JSON.parse(localStorage.getItem("achats"));
    if (Array.isArray(storage) && storage.length) {
      this.achatList.next(storage);
    }
    this.database
      .list("/agriAchats", (ref) =>
        ref.orderByChild("agriAchats").limitToLast(20)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        let tab = [];
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          tab.push(a);
        });
        this.achatList.next(tab);
        this.achatListInventaire.next(tab);
        localStorage.setItem("achats", JSON.stringify(tab));
      });

    return this.achatList;
    // return
    // return this.http.get(this.url + `materiel`);
  }

  getAchatInventaire() {
    return this.achatListInventaire;
  }
}
