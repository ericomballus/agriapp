import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ManagerInventoryPageRoutingModule } from "./manager-inventory-routing.module";

import { ManagerInventoryPage } from "./manager-inventory.page";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerInventoryPageRoutingModule,
    NgbModule,
  ],
  declarations: [ManagerInventoryPage],
})
export class ManagerInventoryPageModule {}
