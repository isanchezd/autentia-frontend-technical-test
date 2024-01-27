import { Component } from '@angular/core';
import { ModalVisibilityHandlerService } from '../../services/modal-visibility-handler.service';
import { AddFriendContainerComponent } from '../../Friend/components/add-friend-container/add-friend-container.component';
import { AddPaymentContainerComponent } from '../../Payment/components/add-payment-container/add-payment-container.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent {

    constructor(private _modalVisibilityHandler: ModalVisibilityHandlerService, private _router: Router) { }

    public get currentRoute() {
        return this._router.url
    }

    public onClickAddFriend() {
        this._modalVisibilityHandler.show(AddFriendContainerComponent);
    }

    public onClickAddPayment() {
        this._modalVisibilityHandler.show(AddPaymentContainerComponent);
    }

    public onClickSeeBalance() {
        this._router.navigateByUrl('/balance');
    }

    public onClickSeePayments() {
        this._router.navigateByUrl('/');
    }
}
