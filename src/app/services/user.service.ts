import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebsase from "firebase";
@Injectable({
  providedIn: "root",
})
export class UserService {
  userList = [];
  constructor(private database: AngularFireDatabase) {}

  getProfil(utilisateur) {}

  addUserToFirebase(user) {
    // ... sometime later

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

  getAllUser() {
    let database = this.database.list("agriUser");
    this.database
      .list("agriUser")
      .snapshotChanges(["child_added"])
      .subscribe((actions) => {
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          console.log(a);

          let index = this.userList.findIndex((elt) => {
            return elt.key === a["key"];
          });
          if (index >= 0) {
            console.log("existe");
          } else {
            this.userList.push(a);
          }
        });
        return this.userList;
      });
  }
  /* deleteUser(user) {
    console.log(user);
    let database = this.database.list("userSci");
    // to get a key, check the Example app below
    database.remove(user.key).then((res) => {
      this.userList = this.userList.filter((elt) => {
        return elt.key != user.key;
      });
      this.notifier("user remove");
    });
  }*/
}
