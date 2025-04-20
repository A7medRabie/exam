export interface LoginResponse {
    message: string,
    token: string,
    userEmail: string,
}

export interface LoginApiResponse {
    message: string,
    token: string,
    user: {
        username:string
        firstName:string
        lastName:string
        email:string
        phone:string
        role:string
        isVerified:boolean,
        _id:string
        createdAt:string,
    }
}