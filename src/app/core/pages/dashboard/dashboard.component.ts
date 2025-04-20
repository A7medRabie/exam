import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from "../course-card/course-card.component";
import { Subscription } from 'rxjs';
import { ObjectSubjects } from '../../interfaces/subjects';
import { SubjectQuizesService } from '../../services/subject-quizes.service';

@Component({
  selector: 'app-dashboard',
  imports: [CourseCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(
    private _SubjectQuizesService: SubjectQuizesService
  ) { }
  getAllSubject!: ObjectSubjects[]

  quizesApiDestroy!: Subscription

  ngOnInit(): void {
    this.quizesApiDestroy = this._SubjectQuizesService.getAllSubjects().subscribe({
      next: res => {
        console.log(res);
        this.getAllSubject = res.subjects

      },
      error: err => {
        console.log(err);

      }
    })
  }
}
