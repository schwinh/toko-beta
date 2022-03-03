import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/common/service/feed.service';

@Component({
  selector: 'app-ann',
  templateUrl: './ann.component.html',
  styleUrls: ['./ann.component.scss']
})
export class AnnComponent implements OnInit {

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    /*-----HANDLE WRITE BUTTON-------*/
    this.feedService.setWriteButton("ann");
  }

}
