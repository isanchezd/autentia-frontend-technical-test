import { Friend } from "../domain/Friend";
import { FriendRepository } from "../domain/FriendRepository";

export function addFriend(friend: Friend, friendRepository: FriendRepository) {
  const id = new Date().getTime();
  let newFriend: Friend = new Friend(id, friend.name, friend.lastname)
  return friendRepository.addFriend(newFriend);
}
