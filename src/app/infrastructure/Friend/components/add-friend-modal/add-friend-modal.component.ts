import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ModalVisibilityHandlerService } from '../../../services/modal-visibility-handler.service';
import { Subject, takeUntil } from 'rxjs';
import { AddFriendFormComponent } from '../add-friend-form/add-friend-form.component';
import { FormControlStatus } from '@angular/forms';
import { addFriend } from '../../../../application/addFriend';
import { FriendRepositoryService } from '../../services/friend-repository.service';
import { Friend } from '../../../../domain/Friend';

enum FORM_STATUS  {
  VALID = 'VALID',
  INVALID = 'INVALID'
}

@Component({
  selector: 'app-add-friend-modal',
  standalone: true,
  imports: [AddFriendFormComponent],
  templateUrl: './add-friend-modal.component.html',
  styleUrl: './add-friend-modal.component.css'
})
export class AddFriendModalComponent implements OnInit, OnDestroy {
  public isSubmited: boolean = false;
  private _formStatus: FormControlStatus;
  private _formValues!: {name: string, lastname: string};
  private _show: boolean
  private _modalVisibilityHandler: ModalVisibilityHandlerService
  private _destroyed$: Subject<void> = new Subject<void>();

  constructor(modalvisibilityHandler: ModalVisibilityHandlerService) {
    this._modalVisibilityHandler = modalvisibilityHandler;
    this._formStatus = FORM_STATUS.INVALID;
    this._show = false;
  }

  public get show(): boolean {
    return this._show
  }

  public get isFormValid() :boolean {
    console.log(this._formStatus)
    return this._formStatus === FORM_STATUS.VALID;
  }

  public ngOnInit(): void {
    this._modalVisibilityHandler.subject
    .pipe(takeUntil(this._destroyed$))
    .subscribe(value => this._show = value)
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  public onCancel(): void {
    this._modalVisibilityHandler.hide();
  }

  public onAccept(): void {
    if (this._formStatus === FORM_STATUS.VALID) {
      const newId = new Date().getTime();
      try {
        const newFriend = new Friend(newId, this._formValues.name, this._formValues.lastname);
        addFriend(newFriend, new FriendRepositoryService())
      } catch(error) {
        console.error(error)
        alert(error)
      } finally {
        this._modalVisibilityHandler.hide();
      }

    }
  }

  public onFormStatusChange(formStatus: FormControlStatus) {
    this._formStatus = formStatus
  }

  public onValuesChange(formValues: {name: string, lastname: string}) {
    this._formValues = {...formValues}
  }


}
