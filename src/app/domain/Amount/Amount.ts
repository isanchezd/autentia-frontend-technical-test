export class Amount {
  public readonly amount: number
  public readonly currency: string;

  constructor(amount: number, currency: string) {
    if(!isValidAmount(amount)) {
      throw new Error('Invalid Amount');
    }

    if(!isValidCurrency(currency)) {
      throw new Error('Invalid Currency');
    }

    this.amount = amount;
    this.currency = currency;
  }
}

function isValidAmount(amount: number) {
  return amount !== 0;
}

function isValidCurrency(currency: string) {
  return currency.length > 0;
}
