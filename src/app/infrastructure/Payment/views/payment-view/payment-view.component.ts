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
  templateUrl: './payment-view.component.html',
  styleUrl: './payment-view.component.css'
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
