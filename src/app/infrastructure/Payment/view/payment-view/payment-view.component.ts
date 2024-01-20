import { Component } from '@angular/core';
import { Payment } from '../../../../domain/Payment';
import { Person } from '../../../../domain/Person';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-payment-view',
  standalone: true,
  imports: [NgFor],
  templateUrl: './payment-view.component.html',
  styleUrl: './payment-view.component.css'
})
export class PaymentViewComponent {
  private _payments: Payment[] = [
    new Payment(new Person('Iván', 'Sánchez', ''), 55, 'This is a description', 'Today'),
    new Payment(new Person('Iván', 'Sánchez', ''), 55, 'This is a description', 'Today'),
    new Payment(new Person('Iván', 'Sánchez', ''), 55, 'This is a description', 'Today')
  ]

  public get payments(): Payment[] {
    return this._payments
  }

}
