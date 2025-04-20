import {  Component, ElementRef, EventEmitter, Input, OnInit,Output,QueryList,Renderer2,ViewChild,ViewChildren,inject, viewChild } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Question } from '../interfaces/questions';
 

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
 

 @Input()examId!:string
@Input() examDuration:number=0
@Output()fireModal:EventEmitter<boolean>=new EventEmitter()

questionArray!:Question[]
indexOfArray: number = 0
section1:boolean=true
section2:boolean=false
section3: boolean = false
section4: boolean = false
minutes!: number;  
seconds: number = 0;  
countdownInterval: any;
answersArray: any[] = []
correctAnswer:number = 0
incorrectAnswer:number = 0
isDisabled:boolean=true
 
_QuestionsService=inject(QuestionsService)
_Renderer2=inject(Renderer2)

 @ViewChildren('balls') balls!:QueryList<ElementRef>


  ngOnInit() {
    
   }
   
   
    startSection2(){
      this.section1=false
      this.section2=true
      this._QuestionsService.getQuestions(this.examId).subscribe({
        next: res => {
          console.log(res);
          this.questionArray = res.questions
          
          this.minutes = this.examDuration-1

          this.startCountdown()
        },
        error: err => {
          console.log(err);
    
        }
      })
    }
    startCountdown() {
      this.countdownInterval = setInterval(() => {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
             clearInterval(this.countdownInterval);
            this.section2 = false
            this.section3 = true
          } else {
            this.minutes--;
            this.seconds = 59;
          }
        } else {
          this.seconds--;
        }
      }, 1000); 
    }
    nextBtn() {
     
     

      if (this.indexOfArray < this.questionArray.length - 1) {
        this.indexOfArray = this.indexOfArray + 1
        this.isDisabled = true

console.log(this.balls);

 
   
          // this._Renderer2.setStyle(this.balls.get(this.indexOfArray)?.nativeElement,"background-color", "blue")
  
  
      }else {
        this.section2 = false
        this.section3 = true
        this.getScore()
      }
    }

    backBtn() {
      if (this.indexOfArray > 0) {
        this._Renderer2.removeStyle(this.balls.get(this.indexOfArray)?.nativeElement,"background-color")
        this.indexOfArray = this.indexOfArray - 1
  
      }
      
    }

    getTheKey(answer:string, correctAnswer:string) {
      this.answersArray.splice(this.indexOfArray, 1 , {'answer':answer, 'correctAnswer':correctAnswer , 'fullQuestion': this.questionArray[this.indexOfArray]})
      this.isDisabled=false
    
   
    }
    getScore (){
      this.answersArray.forEach(answer => {
        if (answer.answer == answer.correctAnswer) {
          this.correctAnswer++
        }else {
          this.incorrectAnswer++
        }
      })
    }
    closeModal(){
      this.fireModal.emit(false)
      
    }
    showResult(){}

}
