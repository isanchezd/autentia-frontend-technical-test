import { Payment } from "../domain/Payment/Payment";
import { PaymentRepository } from "../domain/Payment/PaymentRepository";

export default function addPayment(newPayment: Payment, repository: PaymentRepository, ) {
  return repository.addPayment(newPayment);
}
