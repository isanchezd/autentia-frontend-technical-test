import { FriendRepository } from "../domain/Friend/FriendRepository";

export function getFriends(friendRepository: FriendRepository) {
  const payments = friendRepository.getFriends();
  return payments;
}
