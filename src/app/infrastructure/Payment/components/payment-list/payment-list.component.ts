import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Payment } from '../../../../domain/Payment/Payment';
import { FullnamePipe } from '../../../Common/pipes/fullname.pipe';
import { AmountPipe } from '../../../Common/pipes/amount.pipe';
import { PaymentDatePipe } from '../../../Common/pipes/payment-date.pipe';

@Component({
  selector: 'app-payment-list',
  standalone: true,
  imports: [CommonModule, FullnamePipe, AmountPipe, PaymentDatePipe],
  styleUrl: './payment-list.component.css',
  template: `
    <table class="container table border">
        <thead>
            <tr>
            <th class="text-bold pd-1">FullName</th>
            <th class="text-bold pd-1">Description</th>
            <th class="text-bold pd-1">Amount</th>
            <th class="text-bold pd-1">Date</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-y" *ngFor="let payment of payments">
            <td class="text-center overflow-text pd-1">{{payment.friend | fullname}}</td>
            <td class="text-center overflow-text pd-1">{{payment.description}}</td>
            <td class="text-center overflow-text pd-1" [ngClass]="payment.amount.amount >= 9 ? 'success' : 'danger'">{{payment.amount | amount}}</td>
            <td class="text-center overflow-text pd-1" >{{payment.transactionDate | paymentDate}}</td>
            </tr>
        </tbody>
    </table>
  `
})
export class PaymentListComponent {
  @Input() payments!: Payment[]
}
