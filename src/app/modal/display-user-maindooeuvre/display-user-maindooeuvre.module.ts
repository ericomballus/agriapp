import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayUserMaindooeuvrePageRoutingModule } from './display-user-maindooeuvre-routing.module';

import { DisplayUserMaindooeuvrePage } from './display-user-maindooeuvre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayUserMaindooeuvrePageRoutingModule
  ],
  declarations: [DisplayUserMaindooeuvrePage]
})
export class DisplayUserMaindooeuvrePageModule {}
