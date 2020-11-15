import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddActivieModalPageRoutingModule } from "./add-activie-modal-routing.module";

import { AddActivieModalPage } from "./add-activie-modal.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddActivieModalPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AddActivieModalPage],
})
export class AddActivieModalPageModule {}
