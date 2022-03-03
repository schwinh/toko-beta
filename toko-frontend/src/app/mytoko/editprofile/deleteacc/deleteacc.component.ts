import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-deleteacc',
  templateUrl: './deleteacc.component.html',
  styleUrls: ['./deleteacc.component.scss']
})
export class DeleteaccComponent implements OnInit {

  constructor() { }

  pageToDisplay = "Delete ToKo Account";
  ngOnInit(): void {
  }

}
