export class Amount {
  public readonly amount: number
  public readonly currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public toString(): string {
    return `${this.amount} ${this.currency}`
  }
}
