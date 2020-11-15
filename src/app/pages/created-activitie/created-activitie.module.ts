import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CreatedActivitiePageRoutingModule } from "./created-activitie-routing.module";

import { CreatedActivitiePage } from "./created-activitie.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatedActivitiePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreatedActivitiePage],
})
export class CreatedActivitiePageModule {}
