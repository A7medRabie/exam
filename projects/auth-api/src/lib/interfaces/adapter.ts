import { forgetPassword_data, forgetPassword_response, resetPassword_response, verifyCode_response } from "./forgetPassword";
import { LoginApiResponse, LoginResponse } from "./loginResponse";
import { logout } from "./logout";
import { RegisterApiResponse, RegisterResponse } from "./register-response";

export interface Adapter {
    loginAdapter(data:LoginApiResponse):LoginResponse,
    registerAdapter(data:RegisterApiResponse):RegisterResponse,
    forgetAdaptor(data:forgetPassword_response):forgetPassword_response,
    verifyAdaptor(data: verifyCode_response): verifyCode_response ,
    resetPasswordAdaptor(data: resetPassword_response): resetPassword_response 
    logoutAdaptor(data:logout): logout 

}
