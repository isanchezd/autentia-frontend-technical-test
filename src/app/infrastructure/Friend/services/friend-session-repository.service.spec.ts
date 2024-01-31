import { TestBed } from '@angular/core/testing';

import { FriendSessionRepositoryService } from './friend-session-repository.service';

describe('FriendRepositoryService', () => {
    let service: FriendSessionRepositoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [FriendSessionRepositoryService] });
        service = TestBed.inject(FriendSessionRepositoryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
