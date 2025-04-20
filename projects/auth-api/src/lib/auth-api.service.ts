import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginUserData } from './interfaces/login-user-data';
import { ApiEndpoint } from './enums/Auth.endpoint';
import { LoginApiResponse, LoginResponse } from './interfaces/loginResponse';
import { RegisterUserData } from './interfaces/register-user-data';
import { HttpClient } from '@angular/common/http';
import { AuthAPIAdapter } from './adapter/auth-api.adapter';
import { AuthApi } from './base/auth-api.abstract';
import { RegisterResponse } from './interfaces/register-response';
import { forgetPassword_data, forgetPassword_response, resetPassword_data, resetPassword_response, verifyCode_data, verifyCode_response } from './interfaces/forgetPassword';
import { logout } from './interfaces/logout';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthApi {

  constructor(private _httpClient:HttpClient,private _AuthAPIAdapter:AuthAPIAdapter) { }
  login(data: LoginUserData): Observable<LoginResponse> {
    return this._httpClient.post(ApiEndpoint.LOGIN , data).pipe(
      map( (res:any) => this._AuthAPIAdapter.loginAdapter(res)),
      
    )
}

register(data: RegisterUserData): Observable<RegisterResponse> {
    return this._httpClient.post(ApiEndpoint.REGISTER , data).pipe(
      map((res:any) => this._AuthAPIAdapter.registerAdapter(res))
    )
}


forgetPassword (data: forgetPassword_data): Observable<forgetPassword_response> {
  return this._httpClient.post(ApiEndpoint.FORGET_PASSWORD , data).pipe(
    map((res:any) => this._AuthAPIAdapter.forgetAdaptor(res))

  )
}

verifyResetCode (data: verifyCode_data): Observable<verifyCode_response> {
  return this._httpClient.post(ApiEndpoint.VERIFY_RESET_CODE , data).pipe(
    map((res:any) => this._AuthAPIAdapter.verifyAdaptor(res))
  )
}

ResetPassword (data: resetPassword_data): Observable<resetPassword_response> {
  return this._httpClient.put(ApiEndpoint.RESET_PASSWORD , data).pipe(
    map((res:any) => this._AuthAPIAdapter.resetPasswordAdaptor(res))
  )
}

logOut(): Observable<logout> {
    return this._httpClient.get(ApiEndpoint.LOG_OUT).pipe(
      map((res:any) => this._AuthAPIAdapter.logoutAdaptor(res))
    )
}
}
