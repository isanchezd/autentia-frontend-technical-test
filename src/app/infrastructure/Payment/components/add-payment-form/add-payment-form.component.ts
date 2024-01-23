import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormControlStatus, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { getErrorMessage } from '../../../Common/helpers/form';
import { Subject, distinctUntilChanged, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PaymentFormValues } from '../PaymentFormValues';
import { Friend } from '../../../../domain/Friend';
import { getFriends } from '../../../../application/getFriends';
import { FriendRepositoryService } from '../../../Friend/services/friend-repository.service';

const paymentFormConfig = {
  friend: new FormControl('', Validators.required),
  amount: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required])
}



@Component({
  selector: 'app-add-payment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-payment-form.component.html',
  styleUrl: './add-payment-form.component.css'
})
export class AddPaymentFormComponent {
  @Output() onFormStatusChange: EventEmitter<FormControlStatus> = new EventEmitter<FormControlStatus>();
  @Output() onValuesChange: EventEmitter<PaymentFormValues> = new EventEmitter<PaymentFormValues>()

  public form!: FormGroup;
  private _friends!: Friend[];
  private _destroyed$: Subject<void> = new Subject<void>();

  public get friends() {
    return this._friends;
  }

  public ngOnInit(): void {
    this.form = new FormGroup(paymentFormConfig);
    this.form.statusChanges
      .pipe(takeUntil(this._destroyed$))
      .pipe(distinctUntilChanged())
      .subscribe(value => this.onFormStatusChange.emit(value));
    this.form.valueChanges
      .pipe(takeUntil(this._destroyed$))
      .pipe(distinctUntilChanged())
      .subscribe(value => this.onValuesChange.emit({
        friend: this.form.get('friend')?.value,
        amount: this.form.get('amount')?.value,
        description: this.form.get('description')?.value
      }));
    this._friends = [...getFriends(new FriendRepositoryService())]
  }

  public getErrorMessage(errors: ValidationErrors | null | undefined): string {
    return getErrorMessage(errors);
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
