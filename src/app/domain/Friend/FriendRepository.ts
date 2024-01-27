import { Friend } from "./Friend";

export interface FriendRepository {
  addFriend: (friend: Friend) => Friend;
  getFriends: () => Friend[];
  getFriend: (id: number) => Friend | null;
}
