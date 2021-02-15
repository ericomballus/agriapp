import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvanceSalairePageRoutingModule } from './avance-salaire-routing.module';

import { AvanceSalairePage } from './avance-salaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvanceSalairePageRoutingModule
  ],
  declarations: [AvanceSalairePage]
})
export class AvanceSalairePageModule {}
