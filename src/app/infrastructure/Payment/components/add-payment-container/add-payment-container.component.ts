import { Component } from '@angular/core';
import { AddPaymentFormComponent } from '../add-payment-form/add-payment-form.component';
import { FormControlStatus } from '@angular/forms';
import { ModalVisibilityHandlerService } from '../../../services/modal-visibility-handler.service';
import { FORM_STATUS } from '../../../Common/enums/FormStatus';
import { PaymentFormValues } from '../PaymentFormValues';
import { FriendRepositoryService } from '../../../Friend/services/friend-repository.service';
import { getFriend } from '../../../../application/getFriend';
import { Amount } from '../../../../domain/Amount';
import { Payment } from '../../../../domain/Payment';
import addPayment from '../../../../application/addPayment';
import { PaymentLocalStorageRepositoryService } from '../../services/payment-local-storage-repository.service';

@Component({
  selector: 'app-add-payment-container',
  standalone: true,
  imports: [AddPaymentFormComponent],
  templateUrl: './add-payment-container.component.html',
  styleUrl: './add-payment-container.component.css'
})
export class AddPaymentContainerComponent {
  private _formStatus: FormControlStatus;
  private _formValues!: PaymentFormValues;

  constructor(private _modalvisibilityHandler: ModalVisibilityHandlerService) {
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
      const friend = getFriend(new FriendRepositoryService(), Number(this._formValues.friend));
      if(!friend) {
        console.error('Not Friend encountered')
        return;
      }
      const id = new Date().getTime();
      const amount = new Amount(Number(this._formValues.amount), '€');
      const payment = new Payment(id, friend, amount, this._formValues.description, new Date().getTime())
      addPayment(new PaymentLocalStorageRepositoryService(), payment)
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
