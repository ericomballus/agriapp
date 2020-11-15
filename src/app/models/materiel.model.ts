export class Materiel {
  name: string;
  prix: number;
  quantity: number;
  _id: string;
  display: Boolean;
  constructor(name, prix) {
    this.name = name;
    this.prix = prix;
    this.quantity = 1;
    this._id = "";
  }
}
