import CurrencyCodes from "../Currency/CurrencyCodes";
import { Friend } from "../Friend/Friend";
import { Payment } from "./Payment";
import { Amount } from '../Amount/Amount';

describe('Payment Domain', () => {
    it('Should be created', () => {
        const friend = new Friend(1, 'Iván', 'Sanchez')
        const amount = new Amount(25, CurrencyCodes.EUR)
        const payment = new Payment(1, friend, amount, 'test', new Date().getTime())
        expect(payment).toBeTruthy();
    });

    it('When new payment is created and the id prop is 0, this should be throw an error', () => {
        const friend = new Friend(1, 'Iván', 'Sanchez');
        const amount = new Amount(25, CurrencyCodes.EUR);
        expect(() => new Payment(0, friend, amount, 'test', new Date().getTime())).toThrowError('Invalid Id');
    })

   it('When new payment is created and the Friend is incorrect, this should be throw an error', () => {
        expect(() => {
            const friend = new Friend(0, 'Iván', 'Sanchez');
            const amount = new Amount(25, CurrencyCodes.EUR);
            new Payment(1, friend, amount, 'test', new Date().getTime())
        }).toThrowError('Invalid Id');
    })

    it('When new amount is created and the Amount prop is 0, this should be throw an error', () => {
        expect(() => {
            const friend = new Friend(1, 'Iván', 'Sanchez');
            const amount = new Amount(0, CurrencyCodes.EUR);
            new Payment(1, friend, amount, 'test', new Date().getTime())
        }).toThrowError('Invalid Amount');
    })


    it('When new amount is created an the Currency prop is empty, this should be throw an error', () => {
        const friend = new Friend(1, 'Iván', 'Sanchez');
        const amount = new Amount(25, CurrencyCodes.EUR);
        expect(() => new Payment(1, friend, amount, 'test', 0)).toThrowError('Invalid TransactionDate');
    })
});
