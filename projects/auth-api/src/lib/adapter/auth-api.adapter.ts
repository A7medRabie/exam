import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { LoginApiResponse, LoginResponse } from '../interfaces/loginResponse';
import { RegisterApiResponse, RegisterResponse } from '../interfaces/register-response';
import { forgetPassword_data, forgetPassword_response, resetPassword_data, resetPassword_response, verifyCode_data, verifyCode_response } from '../interfaces/forgetPassword';
import { logout } from '../interfaces/logout';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIAdapter implements Adapter{

  constructor() { }

  loginAdapter (data: LoginApiResponse): LoginResponse{
    return {
      message: data.message,
      token: data.token,
      userEmail: data.user.email
    }
  }

  registerAdapter (data:RegisterApiResponse):RegisterResponse {
    return {
      message: data.message
    }
  }

  forgetAdaptor(data: forgetPassword_response): forgetPassword_response {
    return{
      info:data.info,
      message:data.message
    }
  }
  verifyAdaptor(data: verifyCode_response): verifyCode_response {
    return{
      status:data.status
     }
  }
  resetPasswordAdaptor(data: resetPassword_response): resetPassword_response {
    return{
      message:data.message
     }
  }
  logoutAdaptor(data:logout): logout {
    return{
      message:data.message
     }
  }

}
