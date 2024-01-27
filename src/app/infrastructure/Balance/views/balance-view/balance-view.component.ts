import { Component } from '@angular/core';
import { Balance } from '../../../../domain/Balance/Balance';
import getBalance from '../../../../application/getBalances';
import getBalances from '../../../../application/getBalances';
import { PaymentSessionRepositoryService } from '../../../Payment/services/payment-session-repository.service';
import { FriendSessionRepositoryService } from '../../../Friend/services/friend-session-repository.service';
import { BalanceListComponent } from '../../components/balance-list/balance-list.component';
import { CommonModule } from '@angular/common';







@Component({
    selector: 'app-balance-view',
    standalone: true,
    imports: [CommonModule, BalanceListComponent],
    template: `
        <div class="center-x">
            @if (balances.length > 0) {
                <app-balance-list [balances]="balances" />
            } @else {
                <div class="">No Balance exist</div>
            }
        </div>
    `,
})
export class BalanceViewComponent {
    private _balances: Balance[]

    constructor() {
        this._balances = [];
    }

    public get balances(): Balance[] {
        return this._balances;
    }

    public ngOnInit() {
        this._balances = getBalances(new PaymentSessionRepositoryService(), new FriendSessionRepositoryService())
    }
}
