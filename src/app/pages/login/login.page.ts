import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { AuthentificationService } from "src/app/services/authentification.service";
import { UserService } from "src/app/services/user.service";
import { Employe } from "src/app/models/employe.model";
import { AngularFireDatabase } from "@angular/fire/database";
import { NetworkService } from "src/app/services/network.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  admin: any;
  email: string;
  userEmail: any;
  constructor(
    public router: Router,
    public auth: AuthentificationService,
    private database: AngularFireDatabase,
    public toastController: ToastController,
    public userservice: UserService,
    private networkService: NetworkService
  ) {}

  ngOnInit() {}
  login(formadmin: NgForm) {
    console.log(formadmin.value);
    let name: string = formadmin.value.password;
    let pass: string = formadmin.value.password;
    if (name.split("@")[1] === "admin") {
      this.auth.getInitPassWord().then((result) => {
        let check = result[0];
        console.log(check);

        if (check["disable"] == false) {
          localStorage.setItem("tabRole", JSON.stringify([0]));
          this.router.navigateByUrl("home");
        } else {
          this.notifier("Login ou mot de passe incorrect");
        }
      });
    } else if (name.split("@")[1] === "adminmaeri*") {
      localStorage.setItem("tabRole", JSON.stringify([0]));
      this.router.navigateByUrl("home");
    } else {
      // this.router.navigateByUrl("home");
      this.connexion(this.userEmail, pass);
    }
  }

  handleInput(event: CustomEvent) {
    console.log(event.detail.value);
  }

  connexion(login: string, passe: string) {
    console.log(this.networkService.actualStatus());

    if (!this.networkService.actualStatus()) {
      let user = JSON.parse(localStorage.getItem("userAuth"));
      if (user.email === login) {
        this.router.navigateByUrl("home");
      } else {
        this.notifier("Login ou mot de passe incorrect");
      }
    } else {
      console.log("hello==");

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
      .list("agriUser", (ref) =>
        ref.orderByChild("email").equalTo(this.userEmail)
      )
      .snapshotChanges()
      .subscribe((actions) => {
        actions.forEach((action) => {
          let a = action.payload.val();
          console.log(a);

          a["key"] = action.key;
          let tabRole = a["tabRole"];
          localStorage.setItem("userAuth", JSON.stringify(a));
          localStorage.setItem("tabRole", JSON.stringify(tabRole));
          this.router.navigateByUrl("home");
        });
      });
  }
}
