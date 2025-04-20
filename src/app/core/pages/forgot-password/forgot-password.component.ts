import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ErrorMessageComponent } from "../../../shared/components/ui/error-message/error-message.component";
import { ToastrService } from 'ngx-toastr';
import { AuthApiService } from '../../../../../projects/auth-api/src/public-api';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ ReactiveFormsModule, ErrorMessageComponent,RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  private _router=inject(Router)
  private _AuthApiService=inject(AuthApiService)
  private _toast=inject(ToastrService)
 
  step1: boolean = true
  step2: boolean = false
  step3: boolean = false
  togglePass:boolean=false

   
// step1 >> forget

  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
  })

  fogetPasswordSumbit(): void {
    if (this.forgetPasswordForm.valid) {
       this._AuthApiService.forgetPassword(this.forgetPasswordForm.value).subscribe({
        next: (res) => {
          this._toast.success(res.info)
          this.step1 = false
          this.step2 = true
           console.log(res);
  
        },
        error: (err) => {
          this._toast.error(err.error.message)
          console.log(err);
  
         }
      })
    }
    else{
      this.forgetPasswordForm.markAllAsTouched()
    }
  }


// step2>> verify

  verifyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  })

  verifyCodeSumbit(): void {
    if (this.verifyCodeForm.valid) {
       this._AuthApiService.verifyResetCode(this.verifyCodeForm.value).subscribe({
        next: (res) => {
          this._toast.success(res.status)
          this.step2 = false 
          this.step3 = true
           console.log(res);
  
        },
        error: (err) => {
          this._toast.error(err.error.message)
          console.log(err);
         }
      })
    }else{
      this.verifyCodeForm.markAllAsTouched()
    }

  }
 

  ResendCode(){
    this._AuthApiService.forgetPassword(this.forgetPasswordForm.value).subscribe({
      next: (res) => {
        this._toast.success(res.info)
         console.log(res);

      },
      error: (err) => {
        this._toast.error(err.error.message)

        console.log(err);

        
      }
    })
  }

//step3>>set password

  setPasswordForm: FormGroup = new FormGroup({
     newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
  }, this.confirmPassword)

  confirmPassword(form: AbstractControl) {
    if (form.get('newPassword')?.value === form.get('rePassword')?.value) {
      return null
    } else {
      return { mismatch: true }
    }
  }


setPasswordSumbit(): void {
  console.log(this.setPasswordForm);
  
    if (this.setPasswordForm.valid) {
       let resetPasswordObject = {
        'email': this.forgetPasswordForm.value.email,
        "newPassword": this.setPasswordForm.value.newPassword
      }
      
      this._AuthApiService.ResetPassword(resetPasswordObject).subscribe({
        next: (res) => {
          this._toast.success(res.message)
           console.log(res);
           this._router.navigate(['/auth/login'])
         },
        error: (err) => {
          this._toast.error(err.error.message)
            console.log(err);
           
          }
      })
    }else {
      this.setPasswordForm.markAllAsTouched()
    }
  }

togglePassword(){
    this.togglePass=!this.togglePass
  }
}
