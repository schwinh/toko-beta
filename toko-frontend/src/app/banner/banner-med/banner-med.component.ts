import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FireauthService } from 'src/app/auth/fireauth.service';

@Component({
  selector: 'app-banner-med',
  templateUrl: './banner-med.component.html',
  styleUrls: ['./banner-med.component.scss']
})
export class BannerMedComponent implements OnInit {

  currentStepIndex = -1;
  signupInfoDisplay = ""
  subscription: Subscription = new Subscription;
  /*implement: this banner subscribe to currentstepindex from authservice*/

  constructor(private authService: FireauthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.stepChange
      .subscribe(
        (currentStepIndex: number) => {
          this.currentStepIndex = currentStepIndex;
          this.onChangeStep(currentStepIndex);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChangeStep(currentStepIndex: number) {
    if(currentStepIndex = 0) {
      this.signupInfoDisplay = "ToKo End-user Agreement";
    } else if (currentStepIndex = 1) {
      this.signupInfoDisplay = "Basic Information";
    } else if (currentStepIndex = 2) {
      this.signupInfoDisplay = "Profile Picture";
    } else if (currentStepIndex = 3) {
      this.signupInfoDisplay = "Personalize Your Feed";
    } else if (currentStepIndex = 4) {
      this.signupInfoDisplay = "Verify Your Account";
    }
  }
}
