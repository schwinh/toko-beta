import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { LoginComponent } from './auth/login/login.component';
import { Signup0Component } from './auth/signup/signup0/signup0.component';
import { Signup1Component } from './auth/signup/signup1/signup1.component';
import { Signup2Component } from './auth/signup/signup2/signup2.component';
import { Signup3Component } from './auth/signup/signup3/signup3.component';
import { Signup4Component } from './auth/signup/signup4/signup4.component';
import { BannerMedComponent } from './banner/banner-med/banner-med.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { BackComponent } from './common/back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    Signup0Component,
    Signup1Component,
    Signup2Component,
    Signup3Component,
    Signup4Component,
    BannerMedComponent,
    SignupComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
