import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QnADbConectProvider } from "../../providers/qn-a-db-conect/qn-a-db-conect";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  question: any = 0;
  data;


  constructor(public navCtrl: NavController, public navParams: NavParams, public QnAService: QnADbConectProvider) {
    
      this.QnAService.getByID(this.navParams.get('_id')).then(result => {
      this.question = result;

    });

  }

}
