import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eat-detail',
  templateUrl: './eat-detail.component.html',
  styleUrls: ['./eat-detail.component.scss']
})
export class EatDetailComponent implements OnInit {

  constructor() { }

  pageToDisplay = 'Place Detail';
  ngOnInit(): void {
  }

}
