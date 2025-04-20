export interface forgetPassword_data{
    email:string
}
export interface forgetPassword_response{
    message:string
    info:string
}
export interface verifyCode_data{
    resetCode:string
}
export interface verifyCode_response{
    status:string
 }
 export interface resetPassword_data{
    email:string,
    newPassword:string
}
export interface resetPassword_response{
    message:string
 }