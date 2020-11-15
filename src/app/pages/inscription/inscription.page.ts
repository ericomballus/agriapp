import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.page.html",
  styleUrls: ["./inscription.page.scss"],
})
export class InscriptionPage implements OnInit {
  inscriptionForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(
    public auth: AuthentificationService,
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initInscriptionForm();
  }

  initInscriptionForm() {
    this.inscriptionForm = this.formBuilder.group({
      login: ["", [Validators.required, Validators.email]],
      passe: ["", [Validators.required]],
      confirmation: ["", [Validators.required]],
    });
  }

  onInscriptionFormSubmit() {
    console.log("inscription");
    const value = this.inscriptionForm.value;
    console.log(value);
    const login = value.login;
    const passe = value.passe;
    const confirmation = value.confirmation;
    if (passe === confirmation) {
      this.auth
        .inscription(login, passe)
        .then(() => {
          this.router.navigate(["profil"]);
        })
        .catch((e) => {
          if (e.code === "auth/email-already-in-use") {
            this.notifier("Cet email est déjà utilisé");
          } else {
            this.notifier("Une erreur est survenue");
          }
        });
    } else {
      this.notifier("Les mots de passe doivent être identiques");
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

  inscriptionGoogle() {
    this.router.navigate(["accueil"]);
  }
}
