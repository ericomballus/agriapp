export class Employe {
  name: string;
  firstname: string;
  poste: string;
  password: string;
  salaire: number;
  mobile: string;
  email: string;
  photoUser: string;
  cniUser: string;
  status: number;
  dateNaissance: string;
  lieudenaissance: string;
  typ_employe: string;

  tabRole = [];
  constructor(
    name,
    poste,
    email,
    mobile,
    photoUser,
    cniUser,
    password,
    salaire,
    firstname,
    lieudenaissance,
    type_employe
  ) {
    this.name = name;
    this.firstname = firstname;
    this.email = email;
    this.mobile = mobile;
    this.poste = poste;
    this.cniUser = cniUser;
    this.photoUser = photoUser;
    this.password = password;
    this.salaire = salaire;
    this.dateNaissance = "";
    this.lieudenaissance = lieudenaissance;
    this.typ_employe = this.typ_employe;
  }
}
