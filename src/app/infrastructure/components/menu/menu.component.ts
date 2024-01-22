import { Component } from '@angular/core';
import { ModalVisibilityHandlerService } from '../../services/modal-visibility-handler.service';
import { AddFriendContainerComponent } from '../../Friend/components/add-friend-container/add-friend-container.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  private _modalVisibilityHandler: ModalVisibilityHandlerService

  constructor(modalvisibilityHandler: ModalVisibilityHandlerService) {
    this._modalVisibilityHandler = modalvisibilityHandler;
  }

  public onClickAddFriend() {
    this._modalVisibilityHandler.show(AddFriendContainerComponent);
  }
}
