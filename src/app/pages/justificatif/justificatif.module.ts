import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { JustificatifPageRoutingModule } from "./justificatif-routing.module";

import { JustificatifPage } from "./justificatif.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JustificatifPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [JustificatifPage],
})
export class JustificatifPageModule {}
