import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { finalize, Observable } from 'rxjs';

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

  constructor(private talkPostService: TalkPostService, private afStorage: AngularFireStorage) { }

  pageToDisplay = "Create Post"
  focus10 = true
  isUploaded = false

  ngOnInit(): void {
  }

  onUploadImg(event: any) {
    const randomId = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath = `talk-post/${new Date().getTime()}_${randomId}`;
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file);

    this.uploadProgress = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(
        () => this.uploadUrl = fileRef.getDownloadURL()
      )
    )
    .subscribe();

    this.uploadPath = filePath;
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
  }



  uploadPic(){
    this.isUploaded = !this.isUploaded
  }

}
