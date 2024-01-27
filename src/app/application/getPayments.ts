import { Payment } from "../domain/Payment/Payment";
import { PaymentRepository } from "../domain/Payment/PaymentRepository";

export function getPayments(paymentsRepository: PaymentRepository) {
  const payments = paymentsRepository.getPayments();
  return payments.sort(sortByTransactionDate)
}

function sortByTransactionDate(a: Payment, b: Payment) {
  return a.transactionDate <= b.transactionDate ? 1 : -1
}
