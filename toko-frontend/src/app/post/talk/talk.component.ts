import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeedService } from 'src/app/common/service/feed.service';
import { TalkPost } from '../talk-post.model';
import { TalkPostService } from '../talk-post.service';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit, OnDestroy {
  talkPosts: TalkPost[];
  subscription: Subscription;

  constructor(private feedService: FeedService, private talkPostService: TalkPostService) { }

  ngOnInit(): void {
    /*-----HANDLE WRITE BUTTON-------*/
    this.feedService.setWriteButton("talk");

    //Fetch post from Firestore to Talk feed
    this.subscription = this.talkPostService.fetchPosts().subscribe(posts => {
      console.log(posts);
      this.talkPosts = posts;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
