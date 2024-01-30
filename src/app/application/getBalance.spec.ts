import CurrencyCodes from "../domain/Currency/CurrencyCodes"
import { Friend } from "../domain/Friend/Friend"
import { FriendRepository } from "../domain/Friend/FriendRepository"
import { Payment } from "../domain/Payment/Payment"
import { PaymentRepository } from "../domain/Payment/PaymentRepository"
import getBalance from "./getBalance"


describe('Get Balance use case', () => {
    const mockFriend: Friend = {
        id: 1,
        name: 'Pepe',
        lastname: 'Juanolas'
    };

    const mockPayments = [
        {
            id: 1,
            friend: {
                ...mockFriend
            },
            amount: {
                amount: 25,
                currency: CurrencyCodes.EUR
            },
            description: 'yep',
            transactionDate: 1
        },
        {
            id: 2,
            friend: {
                ...mockFriend
            },
            amount: {
                amount: 25,
                currency: CurrencyCodes.EUR
            },
            description: 'yep',
            transactionDate: 10
        },
        {
            id: 3,
            friend: {
                ...mockFriend
            },
            amount: {
                amount: -10,
                currency: CurrencyCodes.EUR
            },
            description: 'yep',
            transactionDate: 14
        }
    ];

    const mockPaymentRepository: PaymentRepository = {
        getPayments() {
            return [...mockPayments]
        },
        addPayment(payment: Payment) {
            return payment
        }
    };

    const mockFriendRepository: FriendRepository = {
        getFriend() {
            return {
                ...mockFriend
            }
        },
        addFriend(friend: Friend) {
            return friend
        },
        getFriends() {
            return [{...mockFriend}]
        }
    };

    it('When getBalance is called, should be get the balance list of the payments and users', () => {
        spyOn(mockPaymentRepository, 'getPayments').and.returnValue([...mockPayments]);
        spyOn(mockFriendRepository, 'getFriends').and.returnValue([{...mockFriend}]);

        getBalance(mockPaymentRepository, mockFriendRepository,);
        expect(mockPaymentRepository.getPayments).toHaveBeenCalledWith();
        expect(mockFriendRepository.getFriends).toHaveBeenCalled();
    })


    it('When getBalance is called with 3 payments from 1 user, should be return a 1 balance of the user', () => {
        const balance = getBalance(mockPaymentRepository, mockFriendRepository)
        const totalBalanceOfMocks = 40;
        expect(balance.length).toBe(1);
        expect(balance[0].resume.amount).toBe(totalBalanceOfMocks);
    })
})
