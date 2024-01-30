import { Amount } from "./Amount";
import CurrencyCodes from "../Currency/CurrencyCodes";


describe('Amount Domain', () => {
    it('Should be created', () => {
        const amount = new Amount(56.73, CurrencyCodes.EUR)
        expect(amount).toBeTruthy();
    });

    it('When new amount is created and the Amount prop is 0, this should be throw an error', () => {
        expect(() => new Amount(0, CurrencyCodes.EUR)).toThrowError('Invalid Amount')
    })

    it('When new amount is created an the Currency prop is empty, this should be throw an error', () => {
        expect(() => new Amount(56.73, '')).toThrowError('Invalid Currency')
    } )
});
