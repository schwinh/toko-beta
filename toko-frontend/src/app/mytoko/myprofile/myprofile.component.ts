import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  constructor() { }

  pageToDisplay = "";
  page = 'talk';

  ngOnInit(): void {
    this.pageToDisplay = "My Profile";
  }

  onClick(page: string){
    this.page = page;
  }
}
