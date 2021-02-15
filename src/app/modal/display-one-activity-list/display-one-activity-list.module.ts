import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayOneActivityListPageRoutingModule } from './display-one-activity-list-routing.module';

import { DisplayOneActivityListPage } from './display-one-activity-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayOneActivityListPageRoutingModule
  ],
  declarations: [DisplayOneActivityListPage]
})
export class DisplayOneActivityListPageModule {}
