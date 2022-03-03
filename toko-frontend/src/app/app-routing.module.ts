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
import { PagenotfoundComponent } from './common-errors/pagenotfound/pagenotfound.component';
import { EatComponent } from './eat/eat.component';
import { HomeComponent } from './home/home.component';
import { ChangepasswordComponent } from './mytoko/editprofile/changepassword/changepassword.component';
import { DeleteaccComponent } from './mytoko/editprofile/deleteacc/deleteacc.component';
import { EditprofileComponent } from './mytoko/editprofile/editprofile.component';
import { LocationComponent } from './mytoko/location/location.component';
import { MyprofileComponent } from './mytoko/myprofile/myprofile.component';
import { MytokoComponent } from './mytoko/mytoko.component';
import { AnnComponent } from './post/ann/ann.component';
import { PostComponent } from './post/post.component';
import { TalkComponent } from './post/talk/talk.component';
import { WriteAnnComponent } from './post/write-ann/write-ann.component';
import { WriteTalkComponent } from './post/write-talk/write-talk.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'post', 
    component: PostComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: 'talk', component: TalkComponent},
      { path: 'ann', component: AnnComponent}
    ]
  },
  { path: 'write-talk', component: WriteTalkComponent, /*canActivate: [AuthGuard],*/ },
  { path: 'write-ann', component: WriteAnnComponent, /*canActivate: [AuthGuard],*/ },
  { path: 'eat', component: EatComponent, /*canActivate: [AuthGuard],*/ },
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
  },
  { path: 'mytoko', component: MytokoComponent, /*canActivate: [AuthGuard]*/ },
  { path: 'myprofile', component: MyprofileComponent, /*canActivate: [AuthGuard]*/ },
  { path: 'location', component: LocationComponent, /*canActivate: [AuthGuard]*/ },
  { path: 'editprofile', component: EditprofileComponent, /*canActivate: [AuthGuard]*/},
  { path: 'changepw', component: ChangepasswordComponent },
  { path: 'deleteacc', component: DeleteaccComponent },
  { path: '**', component: PagenotfoundComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
