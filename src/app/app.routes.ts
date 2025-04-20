import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { LoginComponent } from './core/pages/login/login.component';
import { ForgotPasswordComponent } from './core/pages/forgot-password/forgot-password.component';
import { authGuard } from './core/guards/auth.guard';
import { loggedGuard } from './core/guards/logged.guard';

export const routes: Routes = [
    {path:"",redirectTo:"auth", pathMatch:('full')},
    {path:"auth",component:AuthLayoutComponent, 
        children: [
            {path:'', redirectTo: "login" ,pathMatch:"full"},
            {path: "login" , loadComponent: ()=> import ("./core/pages/login/login.component").then(c => c.LoginComponent) },
            {path: "register", loadComponent: () => import("./core/pages/register/register.component").then(c => c.RegisterComponent)},
            {path: "recoverPassword", loadComponent: () => import("./core/pages/forgot-password/forgot-password.component").then(c => c.ForgotPasswordComponent)},
             
    ]},

    {path: "exam" ,canActivate:[authGuard], loadComponent: ()=> import ("./core/layout/exam-layout/exam-layout/exam-layout.component").then(c => c.ExamLayoutComponent),
        children: [
            {path:'', redirectTo: "allSubjects" ,pathMatch:"full"},
            {path: "allSubjects" , loadComponent: ()=> import ("./core/pages/dashboard/dashboard.component").then(c => c.DashboardComponent) },
            {path: "quizes-history" , loadComponent: ()=> import ("./core/pages/quiz-history/quiz-history.component").then(c => c.QuizHistoryComponent) },
            {path: "allexams/:id", loadComponent: () => import("./features/all-exams/all-exams.component").then(c => c.AllExamsComponent)},

 ] },




];
