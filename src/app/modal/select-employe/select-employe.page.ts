import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-select-employe",
  templateUrl: "./select-employe.page.html",
  styleUrls: ["./select-employe.page.scss"],
})
export class SelectEmployePage implements OnInit {
  userList = [];
  employeList = [];
  constructor(
    private database: AngularFireDatabase,
    public modalController: ModalController
  ) {
    this.getEmployees();
  }

  ngOnInit() {}

  getEmployees() {
    this.database
      .list("agriUser")
      .snapshotChanges(["child_added"])
      .subscribe((actions) => {
        let tab = [];
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          console.log(a);
          tab.push(a);
          /* let index = this.userList.findIndex((elt) => {
            return elt.key === a["key"];
          });
          if (index >= 0) {
            console.log("existe");
            if (this.userList.length) {
              // this.userList.push(a);
            }
          } else {
            if (this.userList.length) {
              this.userList.push(a);
            }
           
          } */
        });
        console.log(this.userList);
        this.userList = tab;
        //this.allEmployee = tab;
      });
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      employeList: this.employeList,
    });
  }

  selectEmploye(user) {
    console.log(user);
    /* if (user["check"]) {
      user["check"] = false;
      this.employeList = this.employeList.filter((emp) => {
        return emp["key"] !== user["key"];
      });
    } else {
      user["check"] = true;
      this.employeList.push(user);
    }*/
    let tab = [];
    tab = this.employeList.filter((emp) => {
      return emp["key"] == user["key"];
    });
    if (tab.length) {
      this.employeList = this.employeList.filter((emp) => {
        return emp["key"] == user["key"];
      });
    } else {
      this.employeList.push(user);
    }
  }

  cancel() {
    this.modalController.dismiss({
      dismissed: true,
      // employeList: this.employeList,
    });
  }
}
