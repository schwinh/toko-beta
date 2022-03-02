import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireauthService } from '../../fireauth.service';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.scss']
})
export class Signup2Component implements OnInit {

 
  constructor(private authService: FireauthService, private route: ActivatedRoute, private router: Router) { }

  isUploaded = true;

  ngOnInit(): void {
    this.authService.signupStepInit(+2);
  }

  onNext() {
    const nextStep = this.authService.signupStepProvider(+2);
    if(nextStep != null) {
      this.router.navigate(["../authentication/signup/"+nextStep]);
    } else {
      this.router.navigate(["../home"]);
    }
  }

}
