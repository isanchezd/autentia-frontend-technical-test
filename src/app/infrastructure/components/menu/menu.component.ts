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
    styleUrl: './menu.component.css',
    template: `
    <section class="menu">
        <div class="actions">
            @if(currentRoute !== '/balance') {
                <button class="button primary" (click)="onClickSeeBalance()">Ver balance</button>
            } @if(currentRoute === '/balance') {
                <button class="button primary" (click)="onClickSeePayments()">Ver Pagos</button>
            }
            <button class="button primary" (click)="onClickAddPayment()">Añadir Gastos</button>
            <button class="button primary" (click)="onClickAddFriend()">Añadir Amigo</button>
        </div>
    </section>`,
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
