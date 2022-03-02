import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireauthService } from '../../fireauth.service';

@Component({
  selector: 'app-signup0',
  templateUrl: './signup0.component.html',
  styleUrls: ['./signup0.component.scss']
})
export class Signup0Component implements OnInit {

  constructor(private authService: FireauthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.authService.signupStepInit(+0);
  }

  onNext() {
    const nextStep = this.authService.signupStepProvider(+0);
    if(nextStep != null) {
      this.router.navigate(["../authentication/signup/"+nextStep]);
    } else {
      this.router.navigate(["../home"]);
    }
  }

}
