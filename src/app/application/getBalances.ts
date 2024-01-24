import { FriendRepository } from "../domain/FriendRepository";
import { PaymentRepository } from "../domain/PaymentRepository";
import { Balance } from "../domain/Balance";


export default function getBalances(paymentRepository: PaymentRepository, friendRepository: FriendRepository): Balance[] {
    const payments = paymentRepository.getPayments();
    const friends = friendRepository.getFriends();

    const balance: Balance[] = friends.map(friend => {
      const paymentsFromFriend = payments.filter(payment => payment.friend.id === friend.id);
      const resume: number = paymentsFromFriend.reduce((accum, current) => accum + current.amount.amount, 0);

      return {
        friend,
        resume
      };
    })

    return balance;
}
