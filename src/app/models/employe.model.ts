export class Employe {
  name: string;
  poste: string;

  salaire: number = 0;
  mobile: string;
  email: string;
  photoUser: string;
  cniUser: string;

  constructor(name, poste, email, mobile, photoUser, cniUser) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.poste = poste;
    this.cniUser = cniUser;
    this.photoUser = photoUser;
    //  this.salaire = salaire;
  }
}
