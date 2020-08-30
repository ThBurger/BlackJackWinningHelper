import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Black Jack',
      url: '/blackjack',
      icon: 'game-controller'
    },
    {
      title: 'How To',
      url: '/howto',
      icon: 'information-circle'
    },
    {
      title: 'Settings',
      url: '/options',
      icon: 'settings'
    },
    {
      title: 'Support',
      url: '/support',
      icon: 'heart'
    },
    {
      title: 'Rate this app',
      url: '/ratethisapp',
      icon: 'star'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get('suits').then(res => {
      if(res == null) {
        this.storage.set('suits', 'hearts');
      }
    });
    this.storage.get('strategy').then(res => {
      if(res == null) {
        this.storage.set('strategy', '1');
      }
    });
    this.storage.get('backside').then(res => {
      if(res == null) {
        this.storage.set('backside', 'red');
      }
    });
    this.storage.get('ion_did_tutorial').then(res => {
      if(res) {
        this.router
        .navigateByUrl('/blackjack', { replaceUrl: true });
      } else {
        this.router
        .navigateByUrl('/tutorial', { replaceUrl: true });
      }
    });
  }

  ngOnInit() {
  }
}
