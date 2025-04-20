import { Component, Renderer2 } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthApiService } from '../../../../../../projects/auth-api/src/public-api';

@Component({
  selector: 'app-exam-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './exam-layout.component.html',
  styleUrl: './exam-layout.component.scss'
})
export class ExamLayoutComponent {
  constructor(
  private _Router:Router,
   private _AuthApiService:AuthApiService){}

  logOut(): void {
    this._AuthApiService.logOut().subscribe({
      next:res => {
        console.log(res);
        localStorage.removeItem("token")
        this._Router.navigateByUrl("/auth")
      },
      error: err => {
        console.log(err);

      }
    })
  }
}
