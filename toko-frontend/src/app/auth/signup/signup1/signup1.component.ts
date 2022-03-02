import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireauthService } from '../../fireauth.service';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.scss']
})
export class Signup1Component implements OnInit {

  constructor(private authService: FireauthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.signupStepInit(+1);
  }

  onNext() {
    const nextStep = this.authService.signupStepProvider(+1);
    if(nextStep != null) {
      this.router.navigate(["../authentication/signup/"+nextStep]);
    } else {
      this.router.navigate(["../home"]);
    }
  }
}
