import { Injectable } from '@angular/core';
import { Friend } from '../../../domain/Friend/Friend';
import { FriendRepository } from '../../../domain/Friend/FriendRepository';

const KEY_STORAGE = 'friends'

@Injectable()
export class FriendSessionRepositoryService implements FriendRepository {

  public getFriends() {
    let friends: Friend[] = []

    if (sessionStorage.getItem(KEY_STORAGE)) {
      const friendsStoraged = JSON.parse(sessionStorage.getItem(KEY_STORAGE) as string);
      friends = [...friendsStoraged];
    }
    return friends;
  }

  public getFriend(id: number) {
    let friend: Friend | null = null;

    if (sessionStorage.getItem(KEY_STORAGE)) {
      const friends = this.getFriends();
      const friendSearched = friends.find(friendItem => friendItem.id === id)
      friend = friendSearched ? friendSearched : null;
    }

    return friend;
  }



  public addFriend(newFriend: Friend) {
    if (!sessionStorage.getItem(KEY_STORAGE)) {
      sessionStorage.setItem(KEY_STORAGE, JSON.stringify([]))
    }

    if (sessionStorage.getItem(KEY_STORAGE)) {
      const friends = JSON.parse(sessionStorage.getItem(KEY_STORAGE) as string)
      const newFriends = [newFriend, ...friends]
      sessionStorage.setItem(KEY_STORAGE, JSON.stringify(newFriends))
    }

    return newFriend;
  }

}
