import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebsase from "firebase";
import { BehaviorSubject } from "rxjs";
import { isNullOrUndefined } from "util";
@Injectable({
  providedIn: "root",
})
export class UserService {
  userList = [];
  users = new BehaviorSubject([]);
  employe: null;
  url: null;
  constructor(private database: AngularFireDatabase) {}

  getProfil(utilisateur) {}

  addUserToFirebase(user) {
    return new Promise((resolve, reject) => {
      let database = this.database.list("agriUser");
      database
        .push(user)
        .then((b) => {
          resolve(b);
        })
        .catch((error) => {
          reject(JSON.stringify(error));
        });
    });
  }

  addUserSalaire(user) {
    return new Promise((resolve, reject) => {
      let database = this.database.list("agriUser");
      database
        .update(user.key, user)
        .then((b) => {
          resolve(b);
        })
        .catch((error) => {
          reject(JSON.stringify(error));
        });
    });
  }

  getAllUser() {
    let storage = JSON.parse(localStorage.getItem("users"));
    if (Array.isArray(storage) && storage.length) {
      this.users.next(storage);
    }
    this.database
      .list("agriUser")
      .snapshotChanges(["child_added"])
      .subscribe((actions) => {
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          // console.log(a);

          let index = this.userList.findIndex((elt) => {
            return elt.key === a["key"];
          });
          if (index >= 0) {
            console.log("existe");
          } else {
            this.userList.push(a);
          }
        });
        this.users.next(this.userList);
        localStorage.setItem("users", JSON.stringify(this.userList));
      });
    return this.users;
  }
  setEmploye(data) {
    this.employe = data;
  }

  getEmploye() {
    if (isNullOrUndefined(this.employe)) {
      return 0;
    } else {
      return this.employe;
    }
  }
  setImage(url) {
    this.url = url;
  }

  getImage() {
    if (isNullOrUndefined(this.url)) {
      return 0;
    } else {
      return this.url;
    }
  }
}
