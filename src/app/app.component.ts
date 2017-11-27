import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

//Pages Import
import { HomePage } from "../pages/home/home";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { LoginPage } from '../pages/login/login';
import { QnADbConectProvider } from "../providers/qn-a-db-conect/qn-a-db-conect";
//import { QnAProvider } from '../providers/qna/qna';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  todo: any;
  friends: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public QnAService: QnADbConectProvider) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ionViewDidLoad() {
    this.todo.getTodos()
    console.log(this.todo)

    this.friends.getTodos()
    console.log(this.friends)
  }
}
