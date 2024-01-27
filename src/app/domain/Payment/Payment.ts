import { Amount } from "../Amount/Amount";
import { Friend } from "../Friend/Friend";

export class Payment {
  public readonly id: number | null;
  public readonly friend: Friend;
  public readonly amount: Amount;
  public readonly description: string;
  public readonly transactionDate: number;

  constructor(id: number, friend: Friend, amount: Amount, description: string, transactionDate: number) {
    if (!isIdValid(id)) {
      throw new Error('Id is required')
    }

    if (!isFriendValid(friend)) {
      throw new Error('Friend has incorrect format')
    }

    if(!isAmount(amount)) {
      throw new Error('Amount has incorrect format')
    }

    if (!isTransactionDate(transactionDate)) {
      throw new Error('Transaction Date is required')
    }

    this.id = id;
    this.friend = friend;
    this.amount = amount;
    this.description = description;
    this.transactionDate = transactionDate;
  }

}

function isIdValid(id: number) {
  return id > 0
}

function isFriendValid(friend: Friend) {
  return friend.id > 0
}

function isAmount(amount: Amount) {
  return amount.amount > 0
}

function isTransactionDate(transactionDate: number) {
  return transactionDate > 0
}



