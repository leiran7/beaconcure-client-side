import { TestBed } from '@angular/core/testing';

import { FetchedFileService } from './fetched-file.service';

describe('FetchedFileService', () => {
  let service: FetchedFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchedFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
