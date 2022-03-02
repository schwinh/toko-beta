import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { Signup0Component } from './auth/signup/signup0/signup0.component';
import { Signup1Component } from './auth/signup/signup1/signup1.component';
import { Signup2Component } from './auth/signup/signup2/signup2.component';
import { Signup3Component } from './auth/signup/signup3/signup3.component';
import { Signup4Component } from './auth/signup/signup4/signup4.component';

const routes: Routes = [
  { 
    path: 'authentication', 
    component: AuthenticationComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { 
        path: 'signup', 
        component: SignupComponent,
        children: [
        { path: '0', component: Signup0Component},
        { path: '1', component: Signup1Component},
        { path: '2', component: Signup2Component},
        { path: '3', component: Signup3Component},
        { path: '4', component: Signup4Component}
      ]}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
