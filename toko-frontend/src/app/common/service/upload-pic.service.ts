import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { StringFormat } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadPicService {

  constructor(private afStorage: AngularFireStorage) { }

  uploadPicture(file: StringFormat, filePath: string) {
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file);
    return task;
  }

  getFileRef(filePath: string) {
    const ref = this.afStorage.ref(filePath);
    return ref;
  }

  getFileUrl(filePath: string) {
    const ref = this.afStorage.ref(filePath);
    const url = ref.getDownloadURL();
    return url;
  }

  deleteFile(filePath: string) {
    const ref = this.afStorage.ref(filePath);
    ref.delete();
    return 'deleted';
  }
}
