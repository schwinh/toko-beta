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
  subscription: Subscription = new Subscription;
  /*implement: this banner subscribe to currentstepindex from authservice*/

  constructor(private authService: FireauthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.stepChange
      .subscribe(
        (currentStepIndex: number) => {
          this.currentStepIndex = currentStepIndex;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
