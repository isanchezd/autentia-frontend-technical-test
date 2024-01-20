import { Injectable } from '@angular/core';
import { PaymentRepository } from '../../../domain/PaymentRepository';
import { Payment } from '../../../domain/Payment';

@Injectable()
export class PaymentLocalStorageRepositoryService implements PaymentRepository {

  public getPayments() {
    let payments: Payment[] = []

    if(sessionStorage.getItem('payments')) {
      const paymentsStoraged = JSON.parse(sessionStorage.getItem('payments') as string)
      payments = [...paymentsStoraged]
    }

    return payments
  }
}

