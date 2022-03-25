import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eat-post-stars',
  templateUrl: './eat-post-stars.component.html',
  styleUrls: ['./eat-post-stars.component.scss']
})
export class EatPostStarsComponent implements OnInit {

  @Input() stars = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
