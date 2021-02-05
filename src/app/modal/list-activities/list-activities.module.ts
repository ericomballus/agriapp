import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListActivitiesPageRoutingModule } from './list-activities-routing.module';

import { ListActivitiesPage } from './list-activities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListActivitiesPageRoutingModule
  ],
  declarations: [ListActivitiesPage]
})
export class ListActivitiesPageModule {}
