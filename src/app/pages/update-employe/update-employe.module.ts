import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateEmployePageRoutingModule } from './update-employe-routing.module';

import { UpdateEmployePage } from './update-employe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateEmployePageRoutingModule
  ],
  declarations: [UpdateEmployePage]
})
export class UpdateEmployePageModule {}
