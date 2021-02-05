import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCreatedTravauxPageRoutingModule } from './list-created-travaux-routing.module';

import { ListCreatedTravauxPage } from './list-created-travaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCreatedTravauxPageRoutingModule
  ],
  declarations: [ListCreatedTravauxPage]
})
export class ListCreatedTravauxPageModule {}
