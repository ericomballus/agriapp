import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouteractivitePage } from './ajouteractivite.page';

const routes: Routes = [
  {
    path: '',
    component: AjouteractivitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouteractivitePageRoutingModule {}
