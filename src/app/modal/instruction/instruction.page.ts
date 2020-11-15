import { Component, OnInit, Input } from "@angular/core";
import { Activities } from "../../models/activities.model";
@Component({
  selector: "app-instruction",
  templateUrl: "./instruction.page.html",
  styleUrls: ["./instruction.page.scss"],
})
export class InstructionPage implements OnInit {
  //  @Input() data: Activities;
  @Input() firstName: Activities;
  @Input() lastName: string;
  @Input() middleInitial: string;
  constructor() {
    setTimeout(() => {
      console.log(this.firstName);
    });
  }

  ngOnInit() {}
}
