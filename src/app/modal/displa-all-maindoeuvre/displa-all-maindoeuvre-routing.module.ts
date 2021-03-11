import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplaAllMaindoeuvrePage } from './displa-all-maindoeuvre.page';

const routes: Routes = [
  {
    path: '',
    component: DisplaAllMaindoeuvrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplaAllMaindoeuvrePageRoutingModule {}
