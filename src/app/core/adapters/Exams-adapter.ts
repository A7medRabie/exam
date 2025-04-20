import { Injectable } from '@angular/core';
import { AllobjectSubjects, AllResSubjects , ResSubjects  } from '../interfaces/subjects';
import { AllExamsRes, ResExams } from '../interfaces/exams';

@Injectable({
  providedIn: 'root'
})
export class ExamsAdapter {

  constructor() { }

  allSubjectAdapt(data: AllResSubjects): ResSubjects {
    return {
      metadata: {
        currentPage: data.metadata.currentPage,
        numberOfPages: data.metadata.numberOfPages,
        limit: data.metadata.limit
      },

      subjects: data.subjects.map((res: AllobjectSubjects) => ({
        _id: res._id,
        name: res.name,
        icon: res.icon,
        
      }))
    }
  }


   


  getExamOnSubject(data: AllExamsRes): ResExams {
    return {
      exams: data.exams.map((res) => ({
        _id: res._id,
        active: res.active,
        duration: res.duration,
        numberOfQuestions: res.numberOfQuestions,
        subject: res.subject,
        title: res.title,
        createdAt: res.createdAt
      }))
    }
    

  }
}
