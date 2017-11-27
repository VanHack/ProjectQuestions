import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { SignupPage } from "../../pages/signup/signup"
import { AngularFireAuth } from "angularfire2/auth";
//import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      console.log(result);
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }
      else {
        this.navCtrl.setRoot(LoginPage)
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  register() {
    this.navCtrl.push(SignupPage);
  }

}
