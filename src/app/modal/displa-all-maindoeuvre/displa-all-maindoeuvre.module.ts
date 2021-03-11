import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplaAllMaindoeuvrePageRoutingModule } from './displa-all-maindoeuvre-routing.module';

import { DisplaAllMaindoeuvrePage } from './displa-all-maindoeuvre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplaAllMaindoeuvrePageRoutingModule
  ],
  declarations: [DisplaAllMaindoeuvrePage]
})
export class DisplaAllMaindoeuvrePageModule {}
