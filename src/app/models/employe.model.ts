export class Employe {
  name: string;
  poste: string;

  salaire: number = 0;
  mobile: string;
  email: string;

  constructor(name, poste, email, mobile) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.poste = poste;
    //  this.salaire = salaire;
  }
}
