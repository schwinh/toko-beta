import { Component, OnInit } from '@angular/core';
import { FeedService } from '../common/service/feed.service';

@Component({
  selector: 'app-eat',
  templateUrl: './eat.component.html',
  styleUrls: ['./eat.component.scss']
})
export class EatComponent implements OnInit {

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    /*-----HANDLE WRITE BUTTON-------*/
    this.feedService.setWriteButton("eat");

  }

}
