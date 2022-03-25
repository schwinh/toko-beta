import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Observable } from "rxjs";

import { TalkPost } from "./talk-post.model";

@Injectable({ providedIn: 'root' })
export class TalkPostService {
    talkPostsCollection: AngularFirestoreCollection<TalkPost>;
    talkPostsObs: Observable<TalkPost[]>;
    talkPosts: TalkPost[];

    constructor(private store: AngularFirestore, private afStorage: AngularFireStorage) {
        this.talkPostsCollection = this.store.collection<TalkPost>('talk-posts');
        this.talkPostsObs = this.talkPostsCollection.valueChanges()
    }
    
    addPostToFirestore(talkPost: TalkPost) {
        const talkPostObject: TalkPost = {
            userId: talkPost.userId,
            talkPostId: this.store.createId(),
            postDescription: talkPost.postDescription,
            postImgPath: talkPost.postImgPath,
            category: talkPost.category,
            likeNum: talkPost.likeNum,
            postLocation: talkPost.postLocation,
        }

        this.talkPostsCollection.doc(talkPostObject.talkPostId).set(talkPostObject);
    }

    fetchPosts() {
        return this.talkPostsObs;
    }

}