import { Payment } from "./Payment";

export class Payments {
  private _payments: Payment[];

  constructor(payments: Payment[]) {
    this._payments = [...payments];
  }

  get payments(): Payment[] {
    return this._payments;
  }

  addPayments(payment: Payment) {
    this._payments.push(payment)
  }
}
