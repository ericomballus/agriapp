import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminValideActivitiesPageRoutingModule } from './admin-valide-activities-routing.module';

import { AdminValideActivitiesPage } from './admin-valide-activities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminValideActivitiesPageRoutingModule
  ],
  declarations: [AdminValideActivitiesPage]
})
export class AdminValideActivitiesPageModule {}
