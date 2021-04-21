import { Component, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { ActionSheetController } from "@ionic/angular";
import { ScreensizeService } from "../services/screensize.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  isDesktop: boolean;
  constructor(
    private screensizeService: ScreensizeService,
    public router: Router,
    public actionSheet: ActionSheetController
  ) {
    this.screensizeService.isDesktopView().subscribe((isDesktop) => {
      console.log(isDesktop);
      if (this.isDesktop && !isDesktop) {
        // Reload because our routing is out of place
      }
      console.log(this.isDesktop);

      this.isDesktop = isDesktop;
    });
  }

  @HostListener("window:resize", ["$event"])
  private onResize(event) {
    this.screensizeService.onResize(event.target.innerWidth);
  }

  async disconnect() {
    const actionSheet = await this.actionSheet.create({
      header: "Albums",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "se deconnecter ?",
          role: "destructive",
          icon: "alert-circle-outline",
          handler: () => {
            this.router.navigateByUrl("login");
          },
        },

        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
