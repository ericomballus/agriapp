import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebsase from "firebase";
@Injectable({
  providedIn: "root",
})
export class MaterielService {
  url = "http://localhost:3000/";
  constructor(
    private http: HttpClient,
    private database: AngularFireDatabase
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
    return this.http.get(this.url + `materiel`);
  }
}
