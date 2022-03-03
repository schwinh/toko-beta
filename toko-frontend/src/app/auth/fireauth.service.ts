import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {

  constructor(private http: HttpClientModule) { }

  isLoggedin = true;
  currentStepIndex = -1; //initialize -1 for login, 0 to 4 for signup 
  stepChange: Subject<number> = new Subject<number>();
  
  broadcastStepChange(){
    this.stepChange.next(this.currentStepIndex);
  }

  signupStepInit(step: number) {
    this.currentStepIndex = step;
    this.broadcastStepChange();
  }
  
  signupStepProvider(step: number) {
    if(this.currentStepIndex < 4) {
      this.currentStepIndex = step + 1;
      this.broadcastStepChange();
      return this.currentStepIndex;
    } else {
      return null;
    }
  }

  login(email: string, password: string) {
    console.log(email+", pw: "+password);
  }
  
  getLoginStatus(){
    return this.isLoggedin; /*placeholder true/false value now, to be implemented with proper http auth later*/
  }
}
