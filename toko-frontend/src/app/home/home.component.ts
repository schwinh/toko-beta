import { Component, OnInit } from '@angular/core';
import { FeedService } from '../common/service/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    /*-----HANDLE WRITE BUTTON-------*/
    this.feedService.setWriteButton("");
  }

  hasAnn = true;

}
