import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pageFocus(this.router.url);
  }

  pageFocus(toPage: string) {
    if (toPage === '/post' || toPage === '/post/talk' || toPage === '/post/ann') {
      const button = window.document.getElementById("post")!;
      button.focus();
    } else if (toPage === '/home') {
      const button = window.document.getElementById("home")!;
      button.focus();
    } else if (toPage === '/eat' || toPage === '/eat-detail') {
      const button = window.document.getElementById("eat")!;
      button.focus();
    }
  }

}
