import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner-xs',
  templateUrl: './banner-xs.component.html',
  styleUrls: ['./banner-xs.component.scss']
})
export class BannerXsComponent implements OnInit {

  @Input() page = "";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

}
