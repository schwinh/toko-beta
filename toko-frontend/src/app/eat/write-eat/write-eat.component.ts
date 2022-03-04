import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-eat',
  templateUrl: './write-eat.component.html',
  styleUrls: ['./write-eat.component.scss']
})
export class WriteEatComponent implements OnInit {

  constructor() { }

  pageToDisplay = 'Add Place'
  ngOnInit(): void {
  }

}
