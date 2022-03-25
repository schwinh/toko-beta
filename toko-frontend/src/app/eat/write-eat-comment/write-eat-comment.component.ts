import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-eat-comment',
  templateUrl: './write-eat-comment.component.html',
  styleUrls: ['./write-eat-comment.component.scss']
})
export class WriteEatCommentComponent implements OnInit {

  constructor() { }

  pageToDisplay = "Add Comment";
  focus10 = true;
  
  ngOnInit(): void {
  }

}
