import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(){}

  /*-------MECHANIC FOR WRITE BUTTON-----------*/
  writeButton = "";

  writeButtonChange: Subject<string> = new Subject<string>();
  
  broadcastWriteButton(){
    this.writeButtonChange.next(this.writeButton);
  }

  setWriteButton(page: string) {
    if(page === "talk"){
      this.writeButton = "Write what's on your mind...";
      this.broadcastWriteButton();
    } else if(page === "ann"){
      this.writeButton = "Write a new announcement...";
      this.broadcastWriteButton();
    } else if(page === "eat"){
      this.writeButton = "Add a new location...";
      this.broadcastWriteButton();
    } else {
      this.writeButton = "";
      this.broadcastWriteButton();
    }
    console.log("sent: "+this.writeButton);
  }
}
