import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireauthService } from '../../fireauth.service';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.component.html',
  styleUrls: ['./signup3.component.scss']
})
export class Signup3Component implements OnInit {

  constructor(private authService: FireauthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.authService.signupStepInit(+3);
  }

  onNext() {
    const nextStep = this.authService.signupStepProvider(+3);
    if(nextStep != null) {
      this.router.navigate(["../authentication/signup/"+nextStep]);
    } else {
      this.router.navigate(["../home"]);
    }
  }

}
