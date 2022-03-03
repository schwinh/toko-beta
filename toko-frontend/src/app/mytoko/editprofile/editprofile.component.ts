import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  pageToDisplay = "";

  ngOnInit(): void {
    this.pageToDisplay = "Edit Profile";
  }

  nav(goto: string) {
    this.pageToDisplay = goto;
  }

}
