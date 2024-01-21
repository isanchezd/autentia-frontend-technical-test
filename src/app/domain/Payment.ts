import { Amount } from "./Amount";
import { Friend } from "./Friend";

export class Payment {
  public readonly id: number | null;
  public readonly friend: Friend;
  public readonly amount: Amount;
  public readonly description: string;
  public readonly transactionDate: number;

  constructor(id: number, friend: Friend, amount: Amount, description: string, transactionDate: number) {
    this.id = id;
    this.friend = friend;
    this.amount = amount;
    this.description = description;
    this.transactionDate = transactionDate;
  }


}



