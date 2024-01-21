import { Injectable } from '@angular/core';
import { Friend } from '../../../domain/Friend';
import { FriendRepository } from '../../../domain/FriendRepository';

const KEY_STORAGE = 'friends'

@Injectable()
export class FriendRepositoryService implements FriendRepository {

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
