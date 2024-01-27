import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Friend } from '../../domain/Friend/Friend';
import { Payment } from '../../domain/Payment/Payment';

interface StateProps {
  friends: Friend[],
  payments: Payment[],
}


@Injectable({
  providedIn: 'root'
})
export class AppStore {
  private _state: BehaviorSubject<StateProps>

  constructor() {
    this._state = new BehaviorSubject<StateProps>({
      friends: [],
      payments: []
    })
  }

  public get state(): BehaviorSubject<StateProps> {
    return this._state;
  }

  public set state({friends, payments}: StateProps) {
    this._state.next({
      friends,
      payments
    })
  }

  public addFriend(friend: Friend) {
    const currentState = this._state.value;
    this._state.next({
      friends: [friend, ...currentState.friends ],
      payments: [...currentState.payments]
    })
  }

  public addPayment(payment: Payment) {
    const currentState = this.state.value;
    this.state.next({
      friends: [...currentState.friends],
      payments: [payment, ...currentState.payments ]
    })
  }

}
