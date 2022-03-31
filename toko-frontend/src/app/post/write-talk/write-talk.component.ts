import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { finalize, Observable, delay } from 'rxjs';
import { UploadPicService } from 'src/app/common/service/upload-pic.service';
import { Router } from '@angular/router';
import { FeedService } from 'src/app/common/service/feed.service';


import { TalkPost } from '../talk-post.model';
import { TalkPostService } from '../talk-post.service';

@Component({
  selector: 'app-write-talk',
  templateUrl: './write-talk.component.html',
  styleUrls: ['./write-talk.component.scss']
})
export class WriteTalkComponent implements OnInit {
  @ViewChild('f') talkPostForm: NgForm;
  talkPost: TalkPost;
  uploadUrl: Observable<string>;
  uploadPath: string;
  uploadProgress: Observable<number | undefined>;

  defaultCategory = 'unknown';

  constructor(private talkPostService: TalkPostService, private uploadPicService: UploadPicService, private router: Router, private feedService: FeedService) { }

  pageToDisplay = "Create Post"
  focus10 = true
  isUploaded = false

  ngOnInit(): void {
  }

  onUploadImg(event: any) {
    const randomId = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath = `talk-post/${new Date().getTime()}_${randomId}`;

    const task = this.uploadPicService.uploadPicture(file, filePath);
    /* const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file); */

    this.uploadProgress = task.percentageChanges();
    const ref = this.uploadPicService.getFileRef(filePath);
    task.snapshotChanges().pipe(
      finalize(() => this.uploadUrl = ref.getDownloadURL() )
    )
    .subscribe()
    this.uploadPath = filePath;

    this.isUploaded = !this.isUploaded
  }

  onSubmit() {
    this.talkPost = new TalkPost(
      '1',
      '',
      this.talkPostForm.form.value.talkPostDesc,
      this.uploadPath,
      this.talkPostForm.form.value.category,
      0,
      'Raleigh'
    );
    console.log(this.talkPost);
    
    this.talkPostService.addPostToFirestore(this.talkPost);
    this.talkPostForm.reset();
    delay(1000);
    this.feedService.setWriteButton('talk');
    this.router.navigate(['../post/talk']);
  }

  cancelUpload(){
    this.isUploaded = false;
    const temp = this.uploadPicService.deleteFile(this.uploadPath);
    console.log(temp);
  }

}
