import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../../domain/Payment';
import { NgFor, NgIf } from '@angular/common';
import { getPayments } from '../../../../application/getPayments';
import { PaymentLocalStorageRepositoryService } from '../../services/payment-local-storage-repository.service';

@Component({
  selector: 'app-payment-view',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './payment-view.component.html',
  styleUrl: './payment-view.component.css'
})
export class PaymentViewComponent implements OnInit {
  private _payments: Payment[] = [];

  public get payments(): Payment[] {
    return this._payments
  }

  public ngOnInit() {
    this._payments = getPayments(new PaymentLocalStorageRepositoryService())
  }

}
