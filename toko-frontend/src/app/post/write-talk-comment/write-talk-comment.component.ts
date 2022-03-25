import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-talk-comment',
  templateUrl: './write-talk-comment.component.html',
  styleUrls: ['./write-talk-comment.component.scss']
})
export class WriteTalkCommentComponent implements OnInit {

  constructor() { }

  pageToDisplay = "Add comment"
  focus10 = false

  ngOnInit(): void {
  }

}
