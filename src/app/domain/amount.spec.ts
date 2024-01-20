import { Amount } from "./Amount";


describe('Amount', () => {
  const amount = new Amount(56.73, '€')

  it('Should be created', () => {
    expect(amount).toBeTruthy();
  });

  it('When a toString method was called the result should be equal', () => {
    const output = '56.73 €'
    expect(amount.toString()).toBe(output)
  })
});
