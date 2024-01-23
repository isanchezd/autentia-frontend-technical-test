import { Friend } from "../domain/Friend";
import { FriendRepository } from "../domain/FriendRepository";

export function getFriend(repository: FriendRepository, id: number): Friend | null {
  return repository.getFriend(id);
}
