import { Component } from "@angular/core";
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { QnADbConectProvider } from '../../providers/qn-a-db-conect/qn-a-db-conect';
import { CretqetPage } from "../cretqet/cretqet";
import { NewquestionPage } from "../newquestion/newquestion";
import { ThrowStmt } from "@angular/compiler/src/output/output_ast";
import { QnAProvider } from "../../providers/qna/qna"
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todos: any;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController,
    public QnAService: QnADbConectProvider, public alertCtrl: AlertController,
    private toast: ToastController,
    public QnaProvider: QnAProvider) {

    this.QnAService.getTodos().then(result => {
      this.todos = result;
      return this.todos.promise;
    });
  }

  ionViewDidLoad() {
    this.QnAService.getTodos().then((data) => {
      this.todos = data;
    });

    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: 'Welcome to My QnA Question',
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: 'Colud not find Authentication details',
          duration: 3000
        }).present();
      }
    });
  }

  createTodo() {
    let prompt = this.alertCtrl.create({

      buttons: [
        {
          text: 'Salvar', handler: data => {
            this.QnAService.createTodo({
              title: data.title,
              question: data.text,
              date: data.date,
              friends: data.friends
            });
            console.log(data)
          }
        }
      ]
    });
    prompt.present();
  }

  updateTodo(todo) {
    let prompt = this.alertCtrl.create({
      title: 'Editar',
      message: 'Mudou de ideia?',
      inputs: [
        { name: 'destino', placeholder: 'destino' },
        { name: 'origem', placeholder: 'origem' },
        { name: 'cliente', placeholder: 'Nome Cliente' },
        { name: 'iten', placeholder: 'Item' },
        { name: 'valorcr', placeholder: 'Valor' },
        { name: 'notinha', placeholder: 'notinha' }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Salvar',
          handler: data => {
            this.QnAService.updateTodo({
              _id: todo._id,
              _rev: todo._rev,
              destino: data.destino,
              origem: data.origem,
              cliente: data.cliente,
              iten: data.iten,
              valorcr: data.valorcr,
              notinha: data.notinha
            });
            console.log(todo)
          }
        }
      ]
    });

    prompt.present();
  }

  deleteTodo(todo) {
    this.QnAService.deleteTodo(todo);
    console.log(todo)
  }

  openCreatQuestion() {
    this.navCtrl.push(NewquestionPage);
    console.log(NewquestionPage)
  };


  openQuestion(_id) {
    this.navCtrl.push(CretqetPage, { _id: _id });
    console.log(CretqetPage, { _id: _id })
  };

}