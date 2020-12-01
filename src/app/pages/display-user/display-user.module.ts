import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayUserPageRoutingModule } from './display-user-routing.module';

import { DisplayUserPage } from './display-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayUserPageRoutingModule
  ],
  declarations: [DisplayUserPage]
})
export class DisplayUserPageModule {}
