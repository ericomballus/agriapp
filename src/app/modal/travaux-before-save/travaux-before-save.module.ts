import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravauxBeforeSavePageRoutingModule } from './travaux-before-save-routing.module';

import { TravauxBeforeSavePage } from './travaux-before-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravauxBeforeSavePageRoutingModule
  ],
  declarations: [TravauxBeforeSavePage]
})
export class TravauxBeforeSavePageModule {}
