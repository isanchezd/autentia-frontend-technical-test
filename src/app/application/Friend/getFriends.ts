import { FriendRepository } from "../../domain/Friend/FriendRepository";

export default function getFriends(friendRepository: FriendRepository) {
  const payments = friendRepository.getFriends();
  return payments;
}
