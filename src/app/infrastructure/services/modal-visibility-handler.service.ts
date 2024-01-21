import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalVisibilityHandlerService {
  private _subject: BehaviorSubject<boolean>

  constructor() {
    this._subject = new BehaviorSubject<boolean>(false);
  }

  get subject(): BehaviorSubject<boolean> {
    return this._subject
  }

  public show() {
    this._subject.next(true);
  }

  public hide() {
    this._subject.next(false);
  }
}
