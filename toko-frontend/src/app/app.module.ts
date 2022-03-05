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
import { HomeComponent } from './home/home.component';
import { BannerSmallComponent } from './banner/banner-small/banner-small.component';
import { ButtonWriteComponent } from './common/button-write/button-write.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { EatComponent } from './eat/eat.component';
import { AnnComponent } from './post/ann/ann.component';
import { TalkComponent } from './post/talk/talk.component';
import { MytokoComponent } from './mytoko/mytoko.component';
import { BannerXsComponent } from './banner/banner-xs/banner-xs.component';
import { EditprofileComponent } from './mytoko/editprofile/editprofile.component';
import { LocationComponent } from './mytoko/location/location.component';
import { MyprofileComponent } from './mytoko/myprofile/myprofile.component';
import { ChangepasswordComponent } from './mytoko/editprofile/changepassword/changepassword.component';
import { DeleteaccComponent } from './mytoko/editprofile/deleteacc/deleteacc.component';
import { PagenotfoundComponent } from './common-errors/pagenotfound/pagenotfound.component';
import { EatcontentComponent } from './home/eatcontent/eatcontent.component';
import { PostcontentComponent } from './home/postcontent/postcontent.component';
import { ForwardComponent } from './common/forward/forward.component';
import { ProfilepicComponent } from './common/profilepic/profilepic.component';
import { WriteAnnComponent } from './post/write-ann/write-ann.component';
import { WriteTalkComponent } from './post/write-talk/write-talk.component';
import { TalkPostComponent } from './post/talk/talk-post/talk-post.component';
import { AnnPostComponent } from './post/ann/ann-post/ann-post.component';
import { EatPostComponent } from './eat/eat-post/eat-post.component';
import { EatPostStarsComponent } from './eat/eat-post-stars/eat-post-stars.component';
import { ProfilecardComponent } from './mytoko/myprofile/profilecard/profilecard.component';
import { WriteEatComponent } from './eat/write-eat/write-eat.component';
import { EatMinipostComponent } from './home/eatcontent/eat-minipost/eat-minipost.component';
import { PostMinipostComponent } from './home/postcontent/post-minipost/post-minipost.component';
import { EatDetailComponent } from './eat/eat-detail/eat-detail.component';
import { WriteCommentComponent } from './common/write-comment/write-comment.component';

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
    BackComponent,
    HomeComponent,
    BannerSmallComponent,
    ButtonWriteComponent,
    NavbarComponent,
    PostComponent,
    EatComponent,
    AnnComponent,
    TalkComponent,
    MytokoComponent,
    BannerXsComponent,
    EditprofileComponent,
    LocationComponent,
    MyprofileComponent,
    ChangepasswordComponent,
    DeleteaccComponent,
    PagenotfoundComponent,
    EatcontentComponent,
    PostcontentComponent,
    ForwardComponent,
    ProfilepicComponent,
    WriteAnnComponent,
    WriteTalkComponent,
    TalkPostComponent,
    EatPostComponent,
    AnnPostComponent,
    EatPostStarsComponent,
    ProfilecardComponent,
    WriteEatComponent,
    EatMinipostComponent,
    PostMinipostComponent,
    EatDetailComponent,
    WriteCommentComponent

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
