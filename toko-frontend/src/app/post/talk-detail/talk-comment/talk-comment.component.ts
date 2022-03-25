import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talk-comment',
  templateUrl: './talk-comment.component.html',
  styleUrls: ['./talk-comment.component.scss']
})
export class TalkCommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  commenterName = "Dylan Wyatt";
  timeCommented = "5 mins ago";
  comment = "Nice looking!";
}
