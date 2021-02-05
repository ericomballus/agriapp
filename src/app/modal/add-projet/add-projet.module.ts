import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddProjetPageRoutingModule } from "./add-projet-routing.module";

import { AddProjetPage } from "./add-projet.page";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProjetPageRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [AddProjetPage],
})
export class AddProjetPageModule {}
