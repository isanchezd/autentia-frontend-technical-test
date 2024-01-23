import { Injectable } from '@angular/core';
import { PaymentRepository } from '../../../domain/PaymentRepository';
import { Payment } from '../../../domain/Payment';

const KEY_STORAGE = 'payments';

@Injectable()
export class PaymentSessionRepositoryService implements PaymentRepository {

  public getPayments() {
    let payments: Payment[] = []

    if(sessionStorage.getItem('payments')) {
      const paymentsStoraged = JSON.parse(sessionStorage.getItem(KEY_STORAGE) as string)
      payments = [...paymentsStoraged]
    }

    return payments
  }

  public addPayment(payment: Payment) {
    if (!sessionStorage.getItem(KEY_STORAGE)) {
      sessionStorage.setItem(KEY_STORAGE, JSON.stringify([]))
    }

    if (sessionStorage.getItem(KEY_STORAGE)) {
      const payments = JSON.parse(sessionStorage.getItem(KEY_STORAGE) as string)
      const newPayments = [payment, ...payments]
      sessionStorage.setItem(KEY_STORAGE, JSON.stringify(newPayments))
    }

    return payment;
  }
}

