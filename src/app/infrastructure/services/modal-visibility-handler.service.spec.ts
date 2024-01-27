import { TestBed } from '@angular/core/testing';

import { ModalVisibilityHandlerService } from './modal-visibility-handler.service';

describe('ModalVisibilityHandlerService', () => {
    let service: ModalVisibilityHandlerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ModalVisibilityHandlerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
