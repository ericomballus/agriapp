import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructionPage } from './instruction.page';

const routes: Routes = [
  {
    path: '',
    component: InstructionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructionPageRoutingModule {}
