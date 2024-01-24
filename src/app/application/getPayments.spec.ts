import { Amount } from "../domain/Amount"
import CurrencyCodes from "../domain/CurrencyCodes"
import { Payment } from "../domain/Payment"
import { PaymentRepository } from "../domain/PaymentRepository"
import { Friend } from "../domain/Friend"
import { getPayments } from "./getPayments"

describe('GetPaymentsUseCase', () => {

  it('When the repository returns empty payments the length of payments should be 0', () => {
    const mockPaymentRepository: PaymentRepository = {
      getPayments() {
        return []
      },
      addPayment(payment: Payment) {
        return payment
      }
    }
    const payments = getPayments(mockPaymentRepository)
    expect(payments.length).toBe(0)
  })

  it('When the repository returns payments the length of payments should greather than 0', () => {
    const mockPaymentRepository: PaymentRepository = {
      getPayments() {
        return [
          new Payment(
            1,
            new Friend(new Date().getTime(), 'Iván', 'Sanchez'),
            new Amount(5.74, CurrencyCodes.EUR), 'Test',
            new Date().getTime()
          )
        ]
      },
      addPayment(payment: Payment) {
        return payment
      }
    };

    const payments = getPayments(mockPaymentRepository)

    expect(payments.length).toBe(1)
  })

  it('When the repository returns payment, the order of the items should be ordered', () => {
    const mockPaymentRepository: PaymentRepository = {
      getPayments() {
        return [
          new Payment(
            1,
            new Friend(new Date().getTime(), 'Iván', 'Sanchez'),
            new Amount(5.74, CurrencyCodes.EUR), 'Test',
            1705776752
          ),
          new Payment(
            2,
            new Friend(new Date().getTime(), 'Iván', 'Sanchez'),
            new Amount(5.74, CurrencyCodes.EUR), 'Test',
            1674237110)
        ]
      },
      addPayment(payment: Payment) {
        return payment
      }
    };

    const payments = getPayments(mockPaymentRepository)

    expect(payments[0].id).toBe(1)
  })
})
