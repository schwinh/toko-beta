import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, Subscription } from 'rxjs';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-button-write',
  templateUrl: './button-write.component.html',
  styleUrls: ['./button-write.component.scss']
})
export class ButtonWriteComponent implements OnInit {

  buttonText = '';
  subscription: Subscription = new Subscription;

  constructor(private feedService: FeedService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.feedService.writeButtonChange
      .subscribe(
        (buttonTextIn: string) => {
          if(buttonTextIn != ''){
            this.buttonText = buttonTextIn;
            console.log("rcv: "+this.buttonText);
          } else {
            this.buttonText = '';
          }
        }
      );
  }

  onClick(){
    if(this.buttonText === "Write what's on your mind...") {
      this.router.navigate(['../write-talk'], {relativeTo: this.route});
    }
    if (this.buttonText === "Write a new announcement..."){
      this.router.navigate(['../write-ann'], {relativeTo: this.route});
    } 
    if (this.buttonText === "Add a new place..."){
      this.router.navigate(['../write-eat'], {relativeTo: this.route});
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
} 

