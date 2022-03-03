import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FireauthService } from '../fireauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  focus = true;
  focus1 = true;
  constructor(private authService: FireauthService) { }

  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");
    this.authService.signupStepInit(-1);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password);
  }

  onChangeMode(){
    this.authService.signupStepProvider(-1);
  }
  
  ngOnDestroy(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");
  }
}
