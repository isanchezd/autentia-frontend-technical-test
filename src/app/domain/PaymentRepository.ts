import { Payment } from "./Payment";

export interface PaymentRepository {
  getPayments: () => Payment[]
}
