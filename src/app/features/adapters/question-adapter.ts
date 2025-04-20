import { Injectable } from '@angular/core';
import { QuestionAllRes, QuestionRes } from '../interfaces/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsAdapter {

  constructor() { }

 questionAdapt(data: QuestionAllRes): QuestionRes {
    return {
      questions: data.questions.map((res) => ({
        answers: res.answers.map((answer) => ({
          answer: answer.answer,
          key: answer.key,    
        })),
        _id: res._id,
        correct: res.correct,
        question: res.question,
      })),
    };
  }

}
