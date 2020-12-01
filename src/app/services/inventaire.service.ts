import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebsase from "firebase";
import { BehaviorSubject } from "rxjs";
import { NetworkService } from "./network.service";
import { isNullOrUndefined } from "util";
@Injectable({
  providedIn: "root",
})
export class InventaireService {
  url = "http://localhost:3000/";
  inv = new BehaviorSubject([]);
  listIventaire = new BehaviorSubject([]);
  activitie = new BehaviorSubject([]);
  activitieIventaire = new BehaviorSubject([]);
  prod: any;
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

  postInventaireToFirebase(inventaire) {
    return new Promise((resolve, reject) => {
      let database = this.database.list("agriInventaire");
      database
        .push(inventaire)
        .then((b) => {
          resolve(b);
        })
        .catch((error) => {
          reject(JSON.stringify(error));
        });
    });
  }
  updateProdInventaire(prod) {
    let database = this.database.list("agriMatriels");
    return database.update(prod.key, prod);
  }

  getInventaireFromFirebase() {
    let storage = JSON.parse(localStorage.getItem("inventaires"));
    if (Array.isArray(storage) && storage.length) {
      this.inv.next(storage);
    }
    this.database
      .list("/agriInventaire", (ref) =>
        ref.orderByChild("agriInventaire").limitToLast(1)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        let tab = [];

        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          tab.push(a);
        });
        this.inv.next(tab);
        this.listIventaire.next(tab);
        localStorage.setItem("inventaires", JSON.stringify(tab));
      });
    return this.inv;
  }
  setData(data) {
    this.prod = data;
  }

  getData() {
    if (isNullOrUndefined(this.prod)) {
      return 0;
    } else {
      return this.prod;
    }
  }
}
