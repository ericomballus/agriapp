import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-salaire",
  templateUrl: "./salaire.page.html",
  styleUrls: ["./salaire.page.scss"],
})
export class SalairePage implements OnInit {
  userList: any;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.userService.getAllUser().subscribe((users) => {
      this.userList = users;
    });
  }

  displayEmploye(user) {
    this.userService.setEmploye(user);
    this.router.navigateByUrl("/display-user");
  }
}
