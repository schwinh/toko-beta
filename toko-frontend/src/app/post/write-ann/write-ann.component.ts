import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-ann',
  templateUrl: './write-ann.component.html',
  styleUrls: ['./write-ann.component.scss']
})
export class WriteAnnComponent implements OnInit {

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
