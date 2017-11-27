import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QnADbConectProvider } from "../../providers/qn-a-db-conect/qn-a-db-conect";
import { DateTime } from 'ionic-angular/components/datetime/datetime';

@IonicPage()
@Component({
  selector: 'page-newquestion',
  templateUrl: 'newquestion.html',
})
export class NewquestionPage {

  todo = {title: '', 
          quest: '',
          date: '',
          friends: ''
        };

  friends = { id: '01', nome: 'Yago R. Oliveira'}
  
  todos: any;

  displayDate: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public QnAService: QnADbConectProvider) {

      var displayDate = new Date().toLocaleDateString();
      this.displayDate = displayDate
    }
  

  ionViewDidLoad() {
    console.log(this.todo)
    };
  
  createquestion(todo) {
    this.QnAService.createTodo({
      title: this.todo.title,
      question: this.todo.quest,
      date: this.displayDate,
      friends: this.todo.friends
    });
    console.log(this.todo)
  }
}
