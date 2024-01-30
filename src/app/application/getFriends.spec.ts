import { Friend } from "../domain/Friend/Friend";
import { FriendRepository } from "../domain/Friend/FriendRepository";
import getFriends from "./getFriends";

const friendRepository: FriendRepository = {
    addFriend: (friend: Friend) => friend,
    getFriends: () => [],
    getFriend: () => ({} as Friend)
}

const friend: Friend = {
    id: 1,
    name: 'Pepe',
    lastname: 'Valderrama'
}


describe('Get Friends use Case', () => {

    it('When getFriends is called, the getFriends in repository should be called', () => {
        const mockFriendRepository = { ...friendRepository}

        spyOn(mockFriendRepository, 'getFriends').and.returnValue([{ ...friend }]);
        getFriends(friendRepository)
        expect(mockFriendRepository.getFriends).toHaveBeenCalled();
    })

})
