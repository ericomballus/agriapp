export class Employe {
  name: string;
  poste: string;
  password: string;
  salaire: number;
  mobile: string;
  email: string;
  photoUser: string;
  cniUser: string;
  status: number;
  tabRole = [];
  constructor(
    name,
    poste,
    email,
    mobile,
    photoUser,
    cniUser,
    password,
    salaire
  ) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.poste = poste;
    this.cniUser = cniUser;
    this.photoUser = photoUser;
    this.password = password;
    this.salaire = salaire;
  }
}
