import { Friend } from "../domain/Friend/Friend";
import { FriendRepository } from "../domain/Friend/FriendRepository";
import getFriend from "./getFriend";

describe('Get Friend use case', () => {
    const mockFriend: Friend = {
        id: 1,
        name: 'Pepe',
        lastname: 'Juanolas'
    };


    const friendRepository: FriendRepository = {
        getFriend() {
            return {
                ...mockFriend
            };
        },
        addFriend(friend: Friend) {
            return friend;
        },
        getFriends() {
            return [{ ...mockFriend }];
        }
    };

    it('When the getFriend is called, the getFriend of the friend repository should be called with the same id that the parent function', () => {
        spyOn(friendRepository, 'getFriend')
        getFriend(friendRepository, 1);
        expect(friendRepository.getFriend).toHaveBeenCalledOnceWith(1)
    })
})
