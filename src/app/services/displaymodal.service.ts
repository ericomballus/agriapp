import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class DisplaymodalService {
  constructor(public modalController: ModalController) {}

  async loadModal(componen) {}
}
