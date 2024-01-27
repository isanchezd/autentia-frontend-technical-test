import { Friend } from "../Friend/Friend";
import { Amount } from "../Amount/Amount"

export interface Balance {
  friend: Friend,
  resume: Amount
}
