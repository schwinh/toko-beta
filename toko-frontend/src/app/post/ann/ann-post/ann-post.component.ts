import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ann-post',
  templateUrl: './ann-post.component.html',
  styleUrls: ['./ann-post.component.scss']
})
export class AnnPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  postSrc = {
    "imgSrc" : "https://images.macrumors.com/t/yKXzq1hk6lH0tceh4OpS-AetjMc=/1600x1200/smart/article-new/2020/03/applestorepaloalto.jpg",
    "des" : "Apple lifted mask mandate in its stores",
    "authorImgSrc" : "assets/img/faces/team-3.jpg",
    "authorName" : "Joanna Doe",
  }


}
