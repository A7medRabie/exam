import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObjectSubjects } from '../../interfaces/subjects';
import { SubjectQuizesService } from '../../services/subject-quizes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [RouterLink],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent  {
  @Input()subject !: ObjectSubjects
}
