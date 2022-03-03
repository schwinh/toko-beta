import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireauthService } from '../../fireauth.service';

@Component({
  selector: 'app-signup4',
  templateUrl: './signup4.component.html',
  styleUrls: ['./signup4.component.scss']
})
export class Signup4Component implements OnInit {

  constructor(private authService: FireauthService, private route: ActivatedRoute, private router: Router) { }

  isUploaded = false;

  ngOnInit(): void {
    this.authService.signupStepInit(+4);
  }
  
  onNext() {
    const nextStep = this.authService.signupStepProvider(+4);
    if(nextStep != null) {
      this.router.navigate(["../authentication/signup/"+nextStep]);
    } else {
      this.router.navigate(["../home"]);
    }
  }
}
