import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormControlStatus, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { getErrorMessage } from '../../../Common/helpers/form';
import { Subject, distinctUntilChanged, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PaymentFormValues } from '../PaymentFormValues';
import { Friend } from '../../../../domain/Friend/Friend';
import getFriends from '../../../../application/Friend/getFriends';
import { FriendSessionRepositoryService } from '../../../Friend/services/friend-session-repository.service';

const paymentFormConfig = {
    friend: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
}

@Component({
    selector: 'app-add-payment-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    styleUrl: './add-payment-form.component.css',
    template: `
        <form method="dialog" class="form" [formGroup]="form">
            <div class="form-group" [ngClass]="{'error': form.get('friend')?.invalid && form.get('friend')?.touched }">
                <label>Friend (*)</label>
                <select id="friend" formControlName="friend">
                <option>Seleccione un amigo</option>
                @for (friend of friends; track friend.id) {
                    <option  value={{friend.id}}>{{friend.name}}</option>
                }
                </select>
                @if(form.get('friend')?.invalid && form.get('friend')?.touched) {
                <span>{{getErrorMessage(form.get('friend')?.errors)}}</span>
                }
            </div>

            <div class="form-group" [ngClass]="{'error' : form.get('amount')?.invalid && form.get('amount')?.touched }">
                <label>Amount (*)</label>
                <div class="row center-y">
                <input type="number" id="amount" formControlName="amount" placeholder="12.75" />
                </div>
                @if(form.get('amount')?.invalid && form.get('amount')?.touched) {
                <span>{{getErrorMessage(form.get('amount')?.errors)}}</span>
                }
            </div>

            <div class="form-group" [ngClass]="{'error': form.get('description')?.invalid && form.get('description')?.touched }">
                <label>Description (*)</label>
                <input type="text" id="name" formControlName="description" placeholder="beers"/>
                @if(form.get('description')?.invalid && form.get('description')?.touched) {
                <span>{{getErrorMessage(form.get('description')?.errors)}}</span>
                }
            </div>
        </form>
  `
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
        this._friends = [...getFriends(new FriendSessionRepositoryService())]
    }

    public getErrorMessage(errors: ValidationErrors | null | undefined): string {
        return getErrorMessage(errors);
    }

    public ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }
}
