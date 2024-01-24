import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Payment } from '../../../../domain/Payment';
import { FullnamePipe } from '../../pipes/fullname.pipe';
import { AmountPipe } from '../../pipes/amount.pipe';
import { PaymentDatePipe } from '../../pipes/payment-date.pipe';

@Component({
  selector: 'app-payment-list',
  standalone: true,
  imports: [CommonModule, FullnamePipe, AmountPipe, PaymentDatePipe],
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.css'
})
export class PaymentListComponent {
  @Input() payments!: Payment[]
}
