import { Component, OnInit,inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
 import { Router, RouterLink } from '@angular/router';
import { ErrorMessageComponent } from "../../../shared/components/ui/error-message/error-message.component";
import { ToastrService } from 'ngx-toastr';
import { AuthApiService } from '../../../../../projects/auth-api/src/public-api';
import { log } from 'node:console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, ErrorMessageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {

 private _router=inject(Router)
 private _AuthApiService=inject(AuthApiService)
 private _toast=inject(ToastrService)

 togglePass: boolean=false;


  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  
  loginSumbit(): void {
    console.log(this.loginForm);
    
    if (this.loginForm.valid) {
      this._AuthApiService.login(this.loginForm.value).subscribe({
      next: res => {
         localStorage.setItem("token",res.token)
         this._toast.success('welcome', 'you are');
       
          console.log(res);
         this._router.navigate(['/exam'])
      },
      error: err => {
        err.error.message="invalid email or pasword"
        this._toast.error(err.error.message, 'Error');

        console.log(err);
        
       }
    })
  } else {
    this.loginForm.markAllAsTouched()
  }

     
     
    
    
  }

  togglePassword(){ // for show and hide password
    this.togglePass=!this.togglePass
  }
}
