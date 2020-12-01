import { Component, OnDestroy, OnInit, HostListener } from "@angular/core";
import { fromEvent, Observable, Subscription } from "rxjs";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { ElectronService } from "ngx-electron";
import { Plugins } from "@capacitor/core";
import { ScreensizeService } from "./services/screensize.service";
import { ConnectionService } from "ngx-connection-service";
import { MaterielService } from "./services/materiel.service";
import { ActivitiesApiService } from "./services/activities-api.service";
import { AchatService } from "./services/achat.service";
const { LocalNotifications, Clipboard, Modals } = Plugins;
import { NotificationService } from "./services/notification.service";
import { UserService } from "./services/user.service";
import { NetworkService } from "./services/network.service";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  public onlineEvent: Observable<Event>;
  public offlineEvent: Observable<Event>;

  isDesktop: boolean;
  hasNetworkConnection: boolean;
  hasInternetAccess: boolean;
  status: string;
  count = 0;
  count2 = 0;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private electronService: ElectronService,
    private screensizeService: ScreensizeService,
    private connectionService: ConnectionService,
    private materialService: MaterielService,
    public activitiService: ActivitiesApiService,
    public achatService: AchatService,
    private notif: NotificationService,
    private userService: UserService,
    private networkService: NetworkService
  ) {
    this.initializeApp();
    this.connectionService.monitor().subscribe((currentState) => {
      this.hasNetworkConnection = currentState.hasNetworkConnection;
      this.hasInternetAccess = currentState.hasInternetAccess;
      if (this.hasNetworkConnection && this.hasInternetAccess) {
        this.status = "ONLINE";
        this.networkService.setStatus(true);
        this.count = this.count + 1;
        this.count2 = 0;
        if (this.count == 1) {
          this.notif.onlineAlert();
          this.materialService.getMateriel().subscribe((res) => {});
          this.activitiService.getLastTenActivitie().subscribe(
            (data) => {},
            (err) => {}
          );
          this.achatService.getAchat().subscribe((res) => {});
          this.userService.getAllUser().subscribe((res) => {});
        }
      } else {
        this.count2 = this.count2 + 1;
        this.status = "OFFLINE";
        this.count = 0;
        if (this.count2 == 1) {
          this.notif.offlineAlert();
        }
      }
    });
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {}

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
