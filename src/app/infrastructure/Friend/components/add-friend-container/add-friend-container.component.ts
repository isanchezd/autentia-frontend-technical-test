import { Component } from '@angular/core';
import { ModalVisibilityHandlerService } from '../../../services/modal-visibility-handler.service';
import { AddFriendFormComponent } from '../add-friend-form/add-friend-form.component';
import { FormControlStatus } from '@angular/forms';
import { addFriend } from '../../../../application/addFriend';
import { FriendSessionRepositoryService } from '../../services/friend-session-repository.service';
import { Friend } from '../../../../domain/Friend';
import { FORM_STATUS } from '../../../Common/enums/FormStatus';
import { AppStore } from '../../../store/app.store';


@Component({
  selector: 'app-add-friend-container',
  standalone: true,
  imports: [AddFriendFormComponent],
  providers: [],
  templateUrl: './add-friend-container.component.html',
  styleUrl: './add-friend-container.component.css'
})
export class AddFriendContainerComponent {
  private _formStatus: FormControlStatus;
  private _formValues!: {name: string, lastname: string};

  constructor(private _modalvisibilityHandler: ModalVisibilityHandlerService, private _store: AppStore) {
    this._formStatus = FORM_STATUS.INVALID;
  }

  public get isFormValid() :boolean {
    return this._formStatus === FORM_STATUS.VALID;
  }

  public onCancel(): void {
    this._modalvisibilityHandler.hide();
  }

  public onAccept(): void {
    if (this._formStatus === FORM_STATUS.VALID) {
      const newId = new Date().getTime();
      try {
        const newFriend = new Friend(newId, this._formValues.name, this._formValues.lastname);
        this._store.addFriend(addFriend(newFriend, new FriendSessionRepositoryService()))
      } catch(error) {
        console.error(error)
        alert(error)
      } finally {
        this._modalvisibilityHandler.hide();
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
