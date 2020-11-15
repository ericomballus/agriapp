import { Component, HostListener } from "@angular/core";
import { ScreensizeService } from "../services/screensize.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  isDesktop: boolean;
  constructor(private screensizeService: ScreensizeService) {
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
}
