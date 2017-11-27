import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QnAProvider } from '../../providers/qna/qna'




@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  friens: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public QnaFrindes: QnAProvider) {

    this.QnaFrindes.getByID(this.navParams.get('_id')).then(result => {
      this.friens = result;
    });
  }

  ionViewDidLoad() {
    console.log(this.QnaFrindes)
  }

}
