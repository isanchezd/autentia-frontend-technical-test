import { Person } from "./Person";

export class Payment {
  private readonly _person: Person;
  private readonly _amount: number;
  private readonly _description: string;
  private readonly _transactionDate: string;

  constructor(person: Person, amount: number, description: string, transactionDate: string) {
    this._person = person;
    this._amount = amount;
    this._description = description;
    this._transactionDate = transactionDate;
  }

  get person(): Person {
    return this._person;
  }

  get amount(): Number {
    return this._amount;
  }

  get description(): string {
    return this._description;
  }

  get transactionDate(): string {
    return this._transactionDate;
  }
}



