import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayUserMaindooeuvrePage } from './display-user-maindooeuvre.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayUserMaindooeuvrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayUserMaindooeuvrePageRoutingModule {}
