import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayActivityListPageRoutingModule } from './display-activity-list-routing.module';

import { DisplayActivityListPage } from './display-activity-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayActivityListPageRoutingModule
  ],
  declarations: [DisplayActivityListPage]
})
export class DisplayActivityListPageModule {}
