import { TestBed } from '@angular/core/testing';

import { FriendRepositoryService } from './friend-session-repository.service';

describe('FriendRepositoryService', () => {
  let service: FriendRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
