import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayeMaindoeuvrePageRoutingModule } from './paye-maindoeuvre-routing.module';

import { PayeMaindoeuvrePage } from './paye-maindoeuvre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayeMaindoeuvrePageRoutingModule
  ],
  declarations: [PayeMaindoeuvrePage]
})
export class PayeMaindoeuvrePageModule {}
