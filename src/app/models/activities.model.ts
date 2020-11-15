export class Activities {
  name: string;
  description: string;
  cout_main_doeuvre: string;
  superficie: string; //date of birth
  frequence: number = 0;
  periode: string;
  besoin_materiel: string;
  cout_materiel: string;
  statuts_executant: string;

  constructor(
    name,
    description,
    cout_main_doeuvre,
    superficie,
    frequence,
    periode,
    besoin_materiel,
    cout_materiel,
    statuts_executant
  ) {
    this.name = name;
    this.description = description;
    this.cout_main_doeuvre = cout_main_doeuvre;
    this.superficie = superficie;
    this.frequence = frequence;
    this.periode = periode;
    this.besoin_materiel = besoin_materiel;
    this.cout_materiel = cout_materiel;
    this.statuts_executant = statuts_executant;
    //  this.salaire = salaire;
  }
}
