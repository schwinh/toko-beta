import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/common/service/feed.service';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit {

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    /*-----HANDLE WRITE BUTTON-------*/
    this.feedService.setWriteButton("talk");
  }

}
