import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddActivitieNamePageRoutingModule } from "./add-activitie-name-routing.module";

import { AddActivitieNamePage } from "./add-activitie-name.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddActivitieNamePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AddActivitieNamePage],
})
export class AddActivitieNamePageModule {}
