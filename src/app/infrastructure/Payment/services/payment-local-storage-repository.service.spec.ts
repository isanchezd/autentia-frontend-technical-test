import { TestBed } from '@angular/core/testing';

import { PaymentLocalStorageRepositoryService } from './payment-local-storage-repository.service';
import { Payment } from '../../../domain/Payment';
import { Person } from '../../../domain/Person';
import { Amount } from '../../../domain/Amount';

describe('PaymentLocalStorageRepositoryService', () => {
  let service: PaymentLocalStorageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PaymentLocalStorageRepositoryService] });
    service = TestBed.inject(PaymentLocalStorageRepositoryService);
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
    const payment = new Payment(new Date().getTime(), new Person(new Date().getTime() , 'Iván', 'Sanchez', ''), new Amount(5.74, '€'), 'Test', new Date().getTime())
    spyOn(window.sessionStorage, 'getItem').withArgs('payments') .and.returnValue(JSON.stringify([payment]))
    const payments = service.getPayments()
    expect(payments.length).toBe(1)
  })
});
