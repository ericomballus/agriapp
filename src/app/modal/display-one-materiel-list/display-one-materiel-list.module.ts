import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayOneMaterielListPageRoutingModule } from './display-one-materiel-list-routing.module';

import { DisplayOneMaterielListPage } from './display-one-materiel-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayOneMaterielListPageRoutingModule
  ],
  declarations: [DisplayOneMaterielListPage]
})
export class DisplayOneMaterielListPageModule {}
