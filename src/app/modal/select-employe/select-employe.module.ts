import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectEmployePageRoutingModule } from './select-employe-routing.module';

import { SelectEmployePage } from './select-employe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectEmployePageRoutingModule
  ],
  declarations: [SelectEmployePage]
})
export class SelectEmployePageModule {}
