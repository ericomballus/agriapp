import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { InventoryPageRoutingModule } from "./inventory-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { InventoryPage } from "./inventory.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryPageRoutingModule,
    NgbModule,
  ],
  declarations: [InventoryPage],
})
export class InventoryPageModule {}
