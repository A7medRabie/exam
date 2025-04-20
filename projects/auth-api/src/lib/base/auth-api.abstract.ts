import { Observable } from "rxjs";
import { forgetPassword_data, forgetPassword_response, resetPassword_data, resetPassword_response, verifyCode_data, verifyCode_response } from "../interfaces/forgetPassword";
import { RegisterApiResponse, RegisterResponse } from "../interfaces/register-response";
import { RegisterUserData } from "../interfaces/register-user-data";
import { LoginUserData } from "../interfaces/login-user-data";
import { LoginResponse } from "../interfaces/loginResponse";


export abstract class AuthApi {
    abstract login(data: LoginUserData): Observable<LoginResponse>;
    abstract register(data:RegisterUserData): Observable<RegisterResponse>;
    abstract forgetPassword(data: forgetPassword_data): Observable<forgetPassword_response>;
    abstract verifyResetCode(data: verifyCode_data): Observable<verifyCode_response>;
    abstract ResetPassword(data: resetPassword_data): Observable<resetPassword_response>;
    abstract logOut(): Observable<any>;
 


}