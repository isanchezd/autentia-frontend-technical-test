import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../../domain/Payment/Payment';
import { CommonModule } from '@angular/common';
import { AppStore } from '../../../store/app.store';
import { PaymentListComponent } from '../../components/payment-list/payment-list.component';
import { PaymentSessionRepositoryService } from '../../services/payment-session-repository.service';
import { getPayments } from '../../../../application/getPayments';

@Component({
  selector: 'app-payment-view',
  standalone: true,
  imports: [CommonModule, PaymentListComponent],
  providers: [],
  styleUrl: './payment-view.component.css',
  template: `
    <div class="center-x">
        @if(payments.length > 0) {
            <app-payment-list [payments]="payments" />
        } @else {
            <div class="">No payments registered</div>
        }
    </div>
  `
})
export class PaymentViewComponent implements OnInit {
    private _payments: Payment[] = [];

    constructor(private _store: AppStore) { }

    public get payments(): Payment[] {
        return this._payments;
    }

    public ngOnInit() {
        this._store.state.subscribe(data => this._payments = getPayments(new PaymentSessionRepositoryService))
    }

}
