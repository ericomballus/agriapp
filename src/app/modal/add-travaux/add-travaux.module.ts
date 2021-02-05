import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddTravauxPageRoutingModule } from "./add-travaux-routing.module";

import { AddTravauxPage } from "./add-travaux.page";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTravauxPageRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [AddTravauxPage],
})
export class AddTravauxPageModule {}
