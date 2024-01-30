import { Friend } from "../domain/Friend/Friend"
import { FriendRepository } from "../domain/Friend/FriendRepository";
import addFriend from "./addFriend";

const mockFriend = {
    id: 1,
    name: 'Pepe',
    lastname: 'Juaonlas'
}

describe('Add Friend use case', () => {
    const friendRepository: FriendRepository = {
        getFriends(): Friend [] {
            return [{
                ...mockFriend
            }]
        },
        addFriend(friend: Friend): Friend {
            return friend
        },
        getFriend(id: number) : Friend {
            return {
                ...mockFriend
            }
        }
    }


    it('When addFriend is called, should be called with a friend', () => {
        const mockFriendRepository = {
            ...friendRepository
        }


        spyOn(mockFriendRepository, 'addFriend');
         addFriend(mockFriend, mockFriendRepository);
        expect(mockFriendRepository.addFriend).toHaveBeenCalledWith(mockFriend);
    })

})
