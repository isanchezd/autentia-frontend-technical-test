import { Component, Input } from '@angular/core';
import { Balance } from '../../../../domain/Balance/Balance';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from '../../../Common/pipes/fullname.pipe';
import { AmountPipe } from '../../../Common/pipes/amount.pipe';

@Component({
    selector: 'app-balance-list',
    standalone: true,
    imports: [CommonModule, AmountPipe, FullnamePipe],
    template: `
        <table class="container table border">
            <thead>
                <tr>
                    <th class="text-bold pd-1">Friend</th>
                    <th class="text-bold pd-1">Resume</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-y">
                    @for(balance of balances; track balance.friend.id) {
                        <td class="text-center overflow-text pd-1">
                            {{ balance.friend | fullname }}
                        </td>
                        <td
                            class="text-center overflow-text pd-1"
                            [ngClass]="balance.resume.amount >= 9 ? 'success' : 'danger'"
                        >
                            {{ balance.resume | amount }}
                        </td>
                    }
                </tr>
            </tbody>
        </table>`,
})
export class BalanceListComponent {
    @Input() balances!: Balance[]

}
