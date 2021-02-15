import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayTravauxListPageRoutingModule } from './display-travaux-list-routing.module';

import { DisplayTravauxListPage } from './display-travaux-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayTravauxListPageRoutingModule
  ],
  declarations: [DisplayTravauxListPage]
})
export class DisplayTravauxListPageModule {}
