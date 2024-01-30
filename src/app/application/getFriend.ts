import { Friend } from "../domain/Friend/Friend";
import { FriendRepository } from "../domain/Friend/FriendRepository";

export default function getFriend(repository: FriendRepository, id: number): Friend | null {
  return repository.getFriend(id);
}
