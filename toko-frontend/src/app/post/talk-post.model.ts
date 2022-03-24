export class TalkPost {
    public userId: string;
    public talkPostId: string;
    public postDescription: string;
    public postImgPath: string;
    public category: string;
    public likeNum: number;
    public postLocation: string; // Need to change to hash when implementing

    constructor(userId: string, talkPostId: string, postDescription: string, postImgUrl: string, category: string, likeNum: number, postLocation: string) {
        this.userId = userId;
        this.talkPostId = talkPostId;
        this.postDescription = postDescription;
        this.postImgPath = postImgUrl;
        this.category = category;
        this.likeNum = likeNum;
        this.postLocation = postLocation;
    }
}