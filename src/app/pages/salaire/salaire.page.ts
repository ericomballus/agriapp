import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NotificationService } from "src/app/services/notification.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-salaire",
  templateUrl: "./salaire.page.html",
  styleUrls: ["./salaire.page.scss"],
})
export class SalairePage implements OnInit {
  userList: any;
  tabRole = [];
  constructor(
    private userService: UserService,
    private router: Router,
    public notif: NotificationService
  ) {}

  ionViewWillEnter() {
    console.log(JSON.parse(localStorage.getItem("tabRole")));
    this.tabRole = JSON.parse(localStorage.getItem("tabRole"));
    if (this.tabRole.includes(2) || this.tabRole.includes(3)) {
      this.router.navigateByUrl("home");
      this.notif.presentError(
        "vous n'avez pas les autorisations necéssaires pour cette page",
        "danger"
      );
    } else {
    }
  }
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.userService.getAllUser().subscribe((users) => {
      console.log(users);

      this.userList = users;
    });
  }

  displayEmploye(user) {
    this.userService.setEmploye(user);
    this.router.navigateByUrl("/display-user");
  }
}
