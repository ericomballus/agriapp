import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ViewInventairePageRoutingModule } from "./view-inventaire-routing.module";

import { ViewInventairePage } from "./view-inventaire.page";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewInventairePageRoutingModule,
    NgbModule,
  ],
  declarations: [ViewInventairePage],
})
export class ViewInventairePageModule {}
