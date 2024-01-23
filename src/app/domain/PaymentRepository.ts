import { Payment } from "./Payment";

export interface PaymentRepository {
  getPayments: () => Payment[],
  addPayment: (newPayment: Payment) => Payment
}
