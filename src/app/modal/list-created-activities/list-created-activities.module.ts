import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCreatedActivitiesPageRoutingModule } from './list-created-activities-routing.module';

import { ListCreatedActivitiesPage } from './list-created-activities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCreatedActivitiesPageRoutingModule
  ],
  declarations: [ListCreatedActivitiesPage]
})
export class ListCreatedActivitiesPageModule {}
