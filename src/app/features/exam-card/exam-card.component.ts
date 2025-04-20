import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exams } from '../../core/interfaces/exams';
 
@Component({
  selector: 'app-exam-card',
  imports: [],
  templateUrl: './exam-card.component.html',
  styleUrl: './exam-card.component.scss'
})
export class ExamCardComponent {
  modal:boolean=false
  
@Input()exam !:Exams
@Output() fireModal:EventEmitter<boolean>=new EventEmitter()
@Output() sendExamId:EventEmitter<string>=new EventEmitter
@Output() sendExamDuration:EventEmitter<number>=new EventEmitter


startQuiz(){
  this.modal=true
  this.fireModal.emit(this.modal)
  this.sendExamId.emit(this.exam._id)
  this.sendExamDuration.emit(this.exam.duration)
 
}
}
