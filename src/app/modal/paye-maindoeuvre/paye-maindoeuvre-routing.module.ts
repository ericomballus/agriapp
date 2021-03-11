import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayeMaindoeuvrePage } from './paye-maindoeuvre.page';

const routes: Routes = [
  {
    path: '',
    component: PayeMaindoeuvrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayeMaindoeuvrePageRoutingModule {}
