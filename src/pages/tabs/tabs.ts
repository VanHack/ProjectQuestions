import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedsPage } from '../feeds/feeds';
import { CretqetPage } from "../cretqet/cretqet";

@Component({
  templateUrl: 'tabs.html'
})  
export class TabsPage {
  @ViewChild(Nav) nav: Nav;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = FeedsPage;
  tab5Root = CretqetPage;

  constructor() {

  }
  
}
