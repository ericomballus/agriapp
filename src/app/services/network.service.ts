import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class NetworkService {
  status = new BehaviorSubject(false);
  constructor() {}

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status.next(status);
  }
}
