import { Component, OnDestroy, OnInit, HostListener } from "@angular/core";
import { fromEvent, Observable, Subscription } from "rxjs";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { ElectronService } from "ngx-electron";
import { Plugins } from "@capacitor/core";
import { ScreensizeService } from "./services/screensize.service";

const { LocalNotifications, Clipboard, Modals } = Plugins;
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  public onlineEvent: Observable<Event>;
  public offlineEvent: Observable<Event>;
  public subscriptions: Subscription[] = [];
  public connectionStatusMessage: string;
  public connectionStatus: string;
  isDesktop: boolean;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private electronService: ElectronService,
    private screensizeService: ScreensizeService
  ) {
    this.initializeApp();
    if (this.electronService.isElectronApp) {
      console.log("I AM ELECTRON");
      // this.electronService.ipcRenderer.on("online", this.showElectronAlert);
      // this.electronService.ipcRenderer.on("offline", this.showModal);
    }
    /*  this.screensizeService.isDesktopView().subscribe((isDesktop) => {
      if (this.isDesktop && !isDesktop) {
        // Reload because our routing is out of place
        window.location.reload();
      }

      this.isDesktop = isDesktop;
    }); */
  }
  ngOnInit(): void {
    console.log("hello connection");

    this.onlineEvent = fromEvent(window, "online");
    this.offlineEvent = fromEvent(window, "offline");
    this.subscriptions.push(
      this.onlineEvent.subscribe((event) => {
        console.log("Connected to internet! You are online");

        this.connectionStatusMessage = "Connected to internet! You are online";
        this.connectionStatus = "online";
      })
    );
    this.subscriptions.push(
      this.offlineEvent.subscribe((e) => {
        this.connectionStatusMessage = "Connection lost! You are offline";
        this.connectionStatus = "offline";
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screensizeService.onResize(this.platform.width());
      // this.copyText();
    });
  }
  async showElectronAlert() {
    Modals.alert({
      title: "Hello!",
      message: "we are oneline!!!:)",
    });
  }

  async showModal() {
    console.log("we are offline mode !!!");
  }
  async copyText() {
    Clipboard.write({
      string: "this.myText hello",
    });

    Modals.alert({
      title: "Ok",
      message: "Text is in your clipboard.",
    });
  }
  @HostListener("window:resize", ["$event"])
  private onResize(event) {
    this.screensizeService.onResize(event.target.innerWidth);
  }
}
