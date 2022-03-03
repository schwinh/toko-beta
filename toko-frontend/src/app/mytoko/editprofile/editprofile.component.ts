import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  pageToDisplay = "";
  isPressed = false;

  ngOnInit(): void {
    this.pageToDisplay = "Edit Profile";
  }

  onNav(goto: string) {
  }

  onLogout(){
    
  }

}
