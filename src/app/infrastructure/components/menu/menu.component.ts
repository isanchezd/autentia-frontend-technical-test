import { Component } from '@angular/core';
import { ModalVisibilityHandlerService } from '../../services/modal-visibility-handler.service';
import { AddFriendContainerComponent } from '../../Friend/components/add-friend-container/add-friend-container.component';
import { AddPaymentContainerComponent } from '../../Payment/components/add-payment-container/add-payment-container.component';

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

  public  onClickAddPayment() {
    this._modalVisibilityHandler.show(AddPaymentContainerComponent);

  }
}
