import { Amount } from "../../domain/Amount/Amount";
import CurrencyCodes from "../../domain/Currency/CurrencyCodes";
import { Friend } from "../../domain/Friend/Friend"
import { Payment } from "../../domain/Payment/Payment";
import { PaymentRepository } from "../../domain/Payment/PaymentRepository";
import addPayment from "./addPayment";

describe('Add Payment use case', () => {

    it('When addPayment is called, should be called with a payment', () => {
        const mockPayment = new Payment(1, new Friend(1, 'Pepe', 'Lastname'), new Amount(25, CurrencyCodes.EUR), '', 16)

        const mockPaymentRepository: PaymentRepository = {
            getPayments() {
                return []
            },
            addPayment(payment: Payment) {
                return payment
            }
        }

        spyOn(mockPaymentRepository, 'addPayment');
        addPayment(mockPayment, mockPaymentRepository,);
        expect(mockPaymentRepository.addPayment).toHaveBeenCalledWith(mockPayment);
    })
})
