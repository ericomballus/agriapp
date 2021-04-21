import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouteractivitePageRoutingModule } from './ajouteractivite-routing.module';

import { AjouteractivitePage } from './ajouteractivite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouteractivitePageRoutingModule
  ],
  declarations: [AjouteractivitePage]
})
export class AjouteractivitePageModule {}
