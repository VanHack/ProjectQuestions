import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewquestionPage } from './newquestion';

@NgModule({
  declarations: [
    NewquestionPage,
  ],
  imports: [
    IonicPageModule.forChild(NewquestionPage),
  ],
})
export class NewquestionPageModule {}
