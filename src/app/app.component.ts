import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'people'
    },
    {
      title: 'Action Sheet',
      url: '/action-sheet',
      icon: 'magnet'
    },
    {
      title: 'Alert',
      url: '/alert',
      icon: 'alert'
    },
    {
      title: 'Tabs',
      url: '/tabs',
      icon: 'options'
    },
    {
      title: 'Modal',
      url: '/modal',
      icon: 'image'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (cordova.platformId === 'android') {
        this.statusBar.styleLightContent()
        this.statusBar.backgroundColorByHexString('#4D27AE60');
      }
    });
  }
}
