import { FriendRepository } from "../domain/FriendRepository";
import { PaymentRepository } from "../domain/PaymentRepository";
import { Balance } from "../domain/Balance";
import CurrencyCodes from "../domain/CurrencyCodes";
import { Amount } from "../domain/Amount";


export default function getBalances(paymentRepository: PaymentRepository, friendRepository: FriendRepository): Balance[] {
    const payments = paymentRepository.getPayments();
    const friends = friendRepository.getFriends();

    const balance: Balance[] = friends.map(friend => {
      const paymentsFromFriend = payments.filter(payment => payment.friend.id === friend.id);
      const total: number = paymentsFromFriend.reduce((accum, current) => accum + current.amount.amount, 0);
      const resume = new Amount(total, CurrencyCodes.EUR);

      return {
        friend,
        resume
      };
    })

    return balance;
}
