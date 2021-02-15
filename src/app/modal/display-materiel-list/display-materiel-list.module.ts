import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayMaterielListPageRoutingModule } from './display-materiel-list-routing.module';

import { DisplayMaterielListPage } from './display-materiel-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayMaterielListPageRoutingModule
  ],
  declarations: [DisplayMaterielListPage]
})
export class DisplayMaterielListPageModule {}
