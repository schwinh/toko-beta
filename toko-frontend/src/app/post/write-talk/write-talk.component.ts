import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-talk',
  templateUrl: './write-talk.component.html',
  styleUrls: ['./write-talk.component.scss']
})
export class WriteTalkComponent implements OnInit {

  constructor() { }

  pageToDisplay = "Create Post"
  focus10 = true
  isUploaded = false

  ngOnInit(): void {
  }

  uploadPic(){
    this.isUploaded = !this.isUploaded
  }

}
