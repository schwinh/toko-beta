import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytoko',
  templateUrl: './mytoko.component.html',
  styleUrls: ['./mytoko.component.scss']
})
export class MytokoComponent implements OnInit {

  constructor() { }
  pageToDisplay = "";

  ngOnInit(): void {
    this.pageToDisplay = "My ToKo";
  }

}
