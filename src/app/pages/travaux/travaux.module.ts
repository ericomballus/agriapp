import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TravauxPageRoutingModule } from "./travaux-routing.module";

import { TravauxPage } from "./travaux.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravauxPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [TravauxPage],
})
export class TravauxPageModule {}
