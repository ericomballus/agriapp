import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ProjetPageRoutingModule } from "./projet-routing.module";

import { ProjetPage } from "./projet.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ProjetPage],
})
export class ProjetPageModule {}
