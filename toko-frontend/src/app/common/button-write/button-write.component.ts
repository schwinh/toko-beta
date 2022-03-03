import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-button-write',
  templateUrl: './button-write.component.html',
  styleUrls: ['./button-write.component.scss']
})
export class ButtonWriteComponent implements OnInit {

  buttonText = '';
  subscription: Subscription = new Subscription;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.subscription = this.feedService.writeButtonChange
      .subscribe(
        (buttonText: string) => {
          if(buttonText != ''){
            this.buttonText = buttonText;
            console.log("rcv: "+this.buttonText);
          } else {
            this.buttonText = '';
          }
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
