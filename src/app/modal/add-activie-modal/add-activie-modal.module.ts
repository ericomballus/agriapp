import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddActivieModalPageRoutingModule } from "./add-activie-modal-routing.module";

import { AddActivieModalPage } from "./add-activie-modal.page";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddActivieModalPageRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [AddActivieModalPage],
})
export class AddActivieModalPageModule {}
