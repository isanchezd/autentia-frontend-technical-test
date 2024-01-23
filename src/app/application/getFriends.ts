import { FriendRepository } from "../domain/FriendRepository";

export function getFriends(friendRepository: FriendRepository) {
  const payments = friendRepository.getFriends();
  return payments;
}
