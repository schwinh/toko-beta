import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit {

  private urlHistory: string[] = []

  constructor(private _location: Location, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.urlHistory.push(event.urlAfterRedirects)
      }
    })
  }

  ngOnInit(){

  }

  onBack(): void {
      this._location.back();
  }

}
