import { TestBed } from '@angular/core/testing';

import { PaymentSessionRepositoryService } from './payment-session-repository.service';
import { Payment } from '../../../domain/Payment';
import { Friend } from '../../../domain/Friend';
import { Amount } from '../../../domain/Amount';
import CurrencyCodes from '../../../domain/CurrencyCodes';

describe('PaymentLocalStorageRepositoryService', () => {
  let service: PaymentSessionRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PaymentSessionRepositoryService] });
    service = TestBed.inject(PaymentSessionRepositoryService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('When no have payments save previosly the result of the payments should be be 0', () => {
    spyOn(window.sessionStorage, 'getItem').withArgs('payments').and.returnValue(JSON.stringify([]))
    const payments = service.getPayments()
    expect(payments.length).toBe(0)
  })

  it('When we have payments previously the result of the payments should be greather than 0', () => {
    const payment = new Payment(new Date().getTime(), new Friend(new Date().getTime(), 'Iván', 'Sanchez'), new Amount(5.74, CurrencyCodes.EUR), 'Test', new Date().getTime())
    spyOn(window.sessionStorage, 'getItem').withArgs('payments') .and.returnValue(JSON.stringify([payment]))
    const payments = service.getPayments()
    expect(payments.length).toBe(1)
  })
});
