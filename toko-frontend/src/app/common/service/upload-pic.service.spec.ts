import { TestBed } from '@angular/core/testing';

import { UploadPicService } from './upload-pic.service';

describe('UploadPicService', () => {
  let service: UploadPicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadPicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
