import { Friend } from "../../domain/Friend/Friend";
import { FriendRepository } from "../../domain/Friend/FriendRepository";

export default function addFriend(newFriend: Friend, friendRepository: FriendRepository) {
  return friendRepository.addFriend(newFriend);
}
