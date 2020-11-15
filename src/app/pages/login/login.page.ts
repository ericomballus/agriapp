import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { AuthentificationService } from "src/app/services/authentification.service";
import { UserService } from "src/app/services/user.service";
import { Employe } from "src/app/models/employe.model";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  admin: any;
  email: string;
  constructor(
    public router: Router,
    public auth: AuthentificationService,
    private database: AngularFireDatabase,
    public toastController: ToastController,
    public userservice: UserService
  ) {}

  ngOnInit() {}
  login(formadmin: NgForm) {
    console.log(formadmin.value);
    let name: String = formadmin.value.password;
    if (name.split("@")[0] === "admin") {
      this.router.navigateByUrl("admin");
    } else {
      this.router.navigateByUrl("home");
    }
  }

  handleInput(event: CustomEvent) {
    console.log(event.detail.value);
  }

  connexion(login: string, passe: string) {
    this.auth
      .connexion(login, passe)
      .then((utilisateur) => {
        //console.log(utilisateur);
        this.email = login;
        this.chercherUtilisateur();
        if (utilisateur) {
          // this.chercherUtilisateur(utilisateur);
        } else {
          console.log("Login ou mot de passe incorrect");
        }
      })
      .catch((e) => {
        console.log("Login ou mot de passe incorrect");
        this.notifier("Login ou mot de passe incorrect");
      });
  }

  async notifier(texte: string) {
    const toast = await this.toastController.create({
      message: texte,
      duration: 5000,
      animated: true,
      position: "top",
    });
    toast.present();
  }

  chercherUtilisateur() {
    // let database = this.database.list("agriUser");
    this.database
      .list("agriUser")
      .snapshotChanges(["child_added"])
      .subscribe((actions) => {
        actions.forEach((action) => {
          let a = action.payload.val();
          a["key"] = action.key;
          console.log(a);
        });
      });
  }
}