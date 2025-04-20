import { Component,inject } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ErrorMessageComponent } from "../../../shared/components/ui/error-message/error-message.component";
import { AuthApiService } from '../../../../../projects/auth-api/src/public-api';
 import { ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule, ErrorMessageComponent,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

private _router=inject(Router)
private _AuthApiService=inject(AuthApiService)
private _toast=inject(ToastrService)


togglePass: boolean=false;


registerForm: FormGroup = new FormGroup({
  username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  firstName: new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
  lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  email: new FormControl(null, [Validators.required, Validators.email]),
  password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
  rePassword: new FormControl(null, [Validators.required]),
  phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
},this.confirmPassword)

confirmPassword(form:AbstractControl){ // for matching password
   const pass=form.get("password")?.value;
    const repass=form.get("rePassword")?.value;
    if (pass==repass) {
      return null
    }else {return{misMatch:true}}  // return mismath in error of api instead of null

}
register(){
    if (this.registerForm.valid) {
        this._AuthApiService.register(this.registerForm.value).subscribe({
        next: res => {
           
           this._toast.success('Registeration', 'Done');
         
            console.log(res);
           this._router.navigate(['/auth/login'])
        },
        error: err => {
          this._toast.error(err.error.message, 'Error');

          console.log(err.error);
          
         }
      })
    } else {
      this.registerForm.markAllAsTouched()
    }
 
}
togglePassword(){ // for show and hide password
  this.togglePass=!this.togglePass
}

}
