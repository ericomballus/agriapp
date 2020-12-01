import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerInventoryPage } from './manager-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerInventoryPageRoutingModule {}
