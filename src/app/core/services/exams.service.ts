import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectEndPoint } from '../api-end-point/subjects-end-point';
import { map, Observable } from 'rxjs';
import { ResExams } from '../interfaces/exams';
import { ExamsAdapter } from '../adapters/Exams-adapter';
import { ExamsAbstract } from '../subject-abstract/exams-abstract';
 
@Injectable({
  providedIn: 'root'
})
export class ExmasService implements ExamsAbstract{

  constructor(
    private _HttpClient: HttpClient,
    private _ExamsAdapter:ExamsAdapter
  ) { }

  getAllExamsOnSubject(id: string): Observable<ResExams> {
    return this._HttpClient.get(SubjectEndPoint.allExamsOnSubject + id).pipe(
      map((res:any)=> this._ExamsAdapter.getExamOnSubject(res))
    )
  }


}
