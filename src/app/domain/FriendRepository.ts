import { Friend } from "./Friend";

export interface FriendRepository {
  addFriend: (friend: Friend) => Friend;
}
