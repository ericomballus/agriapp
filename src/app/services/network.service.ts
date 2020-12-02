import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class NetworkService {
  $status = new BehaviorSubject(false);
  status: any;
  constructor() {}

  getStatus() {
    return this.$status;
  }
  actualStatus() {
    return this.status;
  }

  setStatus(s) {
    this.$status.next(s);
    this.status = s;
  }
}
