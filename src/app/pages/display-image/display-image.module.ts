import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayImagePageRoutingModule } from './display-image-routing.module';

import { DisplayImagePage } from './display-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayImagePageRoutingModule
  ],
  declarations: [DisplayImagePage]
})
export class DisplayImagePageModule {}
