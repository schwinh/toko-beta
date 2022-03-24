import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedService } from '../common/service/feed.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private feedService: FeedService) { }

  ngOnInit(): void {
    this.router.navigate(['talk'], {relativeTo: this.route});
    this.getfocus();
  }

  getfocus() {
    const talkButton = window.document.getElementById("talkbutton")!;
    talkButton.focus();
  }
}
