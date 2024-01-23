import { Payment } from "../domain/Payment";
import { PaymentRepository } from "../domain/PaymentRepository";

export default function addPayment(repository: PaymentRepository, payment: Payment ) {
  const id = new Date().getTime();
  let newPayment: Payment = new Payment(id, payment.friend, payment.amount, payment.description, payment.transactionDate)
  return repository.addPayment(newPayment);
}
