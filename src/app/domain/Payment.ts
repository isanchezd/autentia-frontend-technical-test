import { Amount } from "./Amount";
import { Person } from "./Person";

export class Payment {
  public readonly id: number | null;
  public readonly person: Person;
  public readonly amount: Amount;
  public readonly description: string;
  public readonly transactionDate: number;

  constructor(id: number, person: Person, amount: Amount, description: string, transactionDate: number) {
    this.id = id;
    this.person = person;
    this.amount = amount;
    this.description = description;
    this.transactionDate = transactionDate;
  }


}



