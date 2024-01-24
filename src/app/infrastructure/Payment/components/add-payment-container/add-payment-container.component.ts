import { Component } from '@angular/core';
import { AddPaymentFormComponent } from '../add-payment-form/add-payment-form.component';
import { FormControlStatus } from '@angular/forms';
import { ModalVisibilityHandlerService } from '../../../services/modal-visibility-handler.service';
import { FORM_STATUS } from '../../../Common/enums/FormStatus';
import { PaymentFormValues } from '../PaymentFormValues';
import { FriendSessionRepositoryService } from '../../../Friend/services/friend-session-repository.service';
import { getFriend } from '../../../../application/getFriend';
import { Amount } from '../../../../domain/Amount';
import { Payment } from '../../../../domain/Payment';
import addPayment from '../../../../application/addPayment';
import { PaymentSessionRepositoryService } from '../../services/payment-session-repository.service';
import { AppStore } from '../../../store/app.store';
import CurrencyCodes from '../../../../domain/CurrencyCodes';

@Component({
  selector: 'app-add-payment-container',
  standalone: true,
  imports: [AddPaymentFormComponent],
  providers: [],
  templateUrl: './add-payment-container.component.html',
  styleUrl: './add-payment-container.component.css'
})
export class AddPaymentContainerComponent {
  private _formStatus: string;
  private _formValues!: PaymentFormValues;

  constructor(private _modalvisibilityHandler: ModalVisibilityHandlerService, private _store: AppStore) {
    this._formStatus = FORM_STATUS.INVALID;
  }

  public get isFormValid(): boolean {
    return this._formStatus === FORM_STATUS.VALID;
  }

  public onCancel(): void {
    this._modalvisibilityHandler.hide();
  }

  public onAccept(): void {
    if (this._formStatus === FORM_STATUS.VALID) {
      const friend = getFriend(new FriendSessionRepositoryService(), Number(this._formValues.friend));
      if (!friend) {
        console.error('Not Friend encountered')
        return;
      }
      const id = new Date().getTime();
      const amount = new Amount(Number(this._formValues.amount), CurrencyCodes.EUR);
      const payment = new Payment(id, friend, amount, this._formValues.description, new Date().getTime())
      this._store.addPayment(addPayment(new PaymentSessionRepositoryService(), payment))
      this._modalvisibilityHandler.hide();
    }
  }

  public onFormStatusChange(formStatus: FormControlStatus) {
    this._formStatus = formStatus
  }

  public onValuesChange(formValues: PaymentFormValues) {
    this._formValues = { ...formValues }
  }

}
