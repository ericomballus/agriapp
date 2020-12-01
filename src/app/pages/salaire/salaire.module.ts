import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalairePageRoutingModule } from './salaire-routing.module';

import { SalairePage } from './salaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalairePageRoutingModule
  ],
  declarations: [SalairePage]
})
export class SalairePageModule {}
