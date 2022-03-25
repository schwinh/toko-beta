import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-minipost',
  templateUrl: './post-minipost.component.html',
  styleUrls: ['./post-minipost.component.scss']
})
export class PostMinipostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgSrc = "https://d1e00ek4ebabms.cloudfront.net/production/cd51b463-6cb6-4248-a365-1b91ace4edb3.jpg"
  postContent = "Owen is a typical techbro..."
}
