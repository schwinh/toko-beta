import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eat-minipost',
  templateUrl: './eat-minipost.component.html',
  styleUrls: ['./eat-minipost.component.scss']
})
export class EatMinipostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  postSrc = {
    "name" : "Pret-A-Manger",
    "imgSrc" : "https://assets3.thrillist.com/v1/image/2769757/1200x600/scale;",
    "des" : "Fresh sandwiches, quick service, reasonable price.",
    "distance" : 1.5,
    "stars" : 5
  }

}
