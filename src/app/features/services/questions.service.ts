import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionsAbstract } from '../abstracts/questions.abstract';
import { map, Observable } from 'rxjs';
import { QuestionsEndPoint } from '../../core/api-end-point/questions-end-point';
import { QuestionsAdapter } from '../adapters/question-adapter';
import { QuestionRes } from '../interfaces/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService implements QuestionsAbstract{

  constructor(
    private _HttpClient:HttpClient,
    private _QuestionsAdapter:QuestionsAdapter
  ) { }

  getQuestions(id:string): Observable<QuestionRes> {
      return this._HttpClient.get(QuestionsEndPoint.getQuestions + id).pipe(
        map((res:any) => this._QuestionsAdapter.questionAdapt(res))
      )
  }


}
