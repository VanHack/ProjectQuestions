import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedsPage } from '../pages/feeds/feeds';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QnADbConectProvider } from '../providers/qn-a-db-conect/qn-a-db-conect';
import { CretqetPage } from '../pages/cretqet/cretqet';
import { NewquestionPage } from '../pages/newquestion/newquestion';
import { QnAProvider } from '../providers/qna/qna';
import { httpFactory } from '@angular/http/src/http_module';
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { FIREBASE_CONFIG } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    CretqetPage,
    NewquestionPage,
    LoginPage,
    HomePage,
    SignupPage,
    FeedsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    CretqetPage,
    NewquestionPage,
    LoginPage,
    SignupPage,
    HomePage,
    FeedsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QnADbConectProvider,
    QnAProvider
  ]
})
export class AppModule {}
