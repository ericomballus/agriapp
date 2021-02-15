import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravauxBeforeSavePage } from './travaux-before-save.page';

const routes: Routes = [
  {
    path: '',
    component: TravauxBeforeSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravauxBeforeSavePageRoutingModule {}
