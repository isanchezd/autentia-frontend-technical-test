import { Friend } from "../../domain/Friend/Friend";
import { FriendRepository } from "../../domain/Friend/FriendRepository";
import getFriends from "./getFriends";



describe('Get Friends use Case', () => {

    const friend: Friend = {
        id: 1,
        name: 'Pepe',
        lastname: 'Valderrama'
    }

    const mockFriendRepository: FriendRepository = {
        getFriend() {
            return {
                ...friend
            }
        },
        addFriend(friend: Friend) {
            return friend
        },
        getFriends() {
            return [{ ...friend }]
        }
    };

    it('When getFriends is called, the getFriends in repository should be called', () => {
        spyOn(mockFriendRepository, 'getFriends').and.returnValue([]);
        getFriends(mockFriendRepository);
        expect(mockFriendRepository.getFriends).toHaveBeenCalled();
    })

})
