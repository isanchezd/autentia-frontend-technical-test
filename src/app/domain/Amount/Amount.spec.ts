import { Amount } from "./Amount";
import CurrencyCodes from "../Currency/CurrencyCodes";


describe('Amount', () => {
  const amount = new Amount(56.73, CurrencyCodes.EUR)

  it('Should be created', () => {
    expect(amount).toBeTruthy();
  });
});
