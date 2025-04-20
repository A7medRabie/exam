import { Component } from '@angular/core';
import { ExamCardComponent } from "../exam-card/exam-card.component";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Exams, ResExams } from '../../core/interfaces/exams';
import { ExmasService } from '../../core/services/exams.service';
import { ModalComponent } from "../modal/modal.component";
 
@Component({
  selector: 'app-all-exams',
  imports: [ExamCardComponent, ModalComponent],
  templateUrl: './all-exams.component.html',
  styleUrl: './all-exams.component.scss'
})
export class AllExamsComponent {
 
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ExmasService: ExmasService
  ) { }


  diplomaRes!: Exams[]
 
  diplomaApiDestroy!: Subscription

 
  subjectParamId!: string
  modal:boolean=false
  examId:string=""
  examDuration:number=0

  ngOnInit(): void {
    // get id in link
    this._ActivatedRoute.paramMap.subscribe({
      next: param => {
        this.subjectParamId = param.get("id")!
      }
    })

    // get api
    this.diplomaApiDestroy = this._ExmasService.getAllExamsOnSubject(this.subjectParamId).subscribe({
      next: (res: ResExams) => {
         
        console.log(res.exams);

        this.diplomaRes = res.exams

      }
    })
  }

  receiveModal(updated:boolean){
   
    this.modal=updated
    
  }
  receiveExamId(Id:string){
    this.examId=Id
  }
  receiveExamDuration(time:number){
   this.examDuration=time
  }
  closeModal(close:boolean){
   this.modal=close
  }
  
}
