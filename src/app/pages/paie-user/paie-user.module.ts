import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaieUserPageRoutingModule } from './paie-user-routing.module';

import { PaieUserPage } from './paie-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaieUserPageRoutingModule
  ],
  declarations: [PaieUserPage]
})
export class PaieUserPageModule {}
