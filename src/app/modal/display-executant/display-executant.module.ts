import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayExecutantPageRoutingModule } from './display-executant-routing.module';

import { DisplayExecutantPage } from './display-executant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayExecutantPageRoutingModule
  ],
  declarations: [DisplayExecutantPage]
})
export class DisplayExecutantPageModule {}
