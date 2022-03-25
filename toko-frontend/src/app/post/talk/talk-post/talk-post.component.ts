
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

import { TalkPost } from '../../talk-post.model';

@Component({
  selector: 'app-talk-post',
  templateUrl: './talk-post.component.html',
  styleUrls: ['./talk-post.component.scss']
})
export class TalkPostComponent implements OnInit {
  @Input() talkPost: TalkPost;
  imgUrl: Observable<string | null>;

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
    const ref = this.afStorage.ref(this.talkPost.postImgPath);
    this.imgUrl = ref.getDownloadURL();
  }

  postSrc = {
    "imgSrc" : "https://d1e00ek4ebabms.cloudfront.net/production/cd51b463-6cb6-4248-a365-1b91ace4edb3.jpg",
    "des" : "Oven is a typical techbro in silicon valley.",
    "authorImgSrc" : "assets/img/faces/team-3.jpg",
    "authorName" : "Joanna Doe",
    "like" : 25,
    "comment" : 10
  }

}
