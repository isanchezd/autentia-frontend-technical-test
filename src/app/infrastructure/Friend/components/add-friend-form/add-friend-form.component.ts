import { CommonModule } from '@angular/common';
import { Component, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, FormControlStatus, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Subject, distinctUntilChanged, takeUntil } from 'rxjs';
import { getErrorMessage } from '../../../Common/helpers/form';

const friendFormConfig = {
  name: new FormControl('', [Validators.required]),
  lastname: new FormControl('', [Validators.required])
}

@Component({
  selector: 'app-add-friend-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  styleUrl: './add-friend-form.component.css',
  template: `
    <form method="dialog" class="form" [formGroup]="friendForm">
        <div class="form-group" [ngClass]="{'error': friendForm.get('name')?.invalid && friendForm.get('name')?.touched }">
            <label>Name (*)</label>
            <input type="text" id="name" formControlName="name" placeholder="Jude"/>
            @if(friendForm.get('name')?.invalid && friendForm.get('name')?.touched) {
                <span>{{getErrorMessage(friendForm.get('name')?.errors)}}</span>
            }
        </div>

        <div class="form-group" [ngClass]="{'error' : friendForm.get('lastname')?.invalid && friendForm.get('lastname')?.touched }">
            <label>Lastname (*)</label>
            <input type="text" id="lastname" formControlName="lastname" placeholder="Bellingham"/>
            @if(friendForm.get('lastname')?.invalid && friendForm.get('lastname')?.touched) {
                <span>{{getErrorMessage(friendForm.get('lastname')?.errors)}}</span>
            }
        </div>
    </form>
    `
})
export class AddFriendFormComponent implements OnInit, OnDestroy {
  @Output() onFormStatusChange: EventEmitter<FormControlStatus> = new EventEmitter<FormControlStatus>();
  @Output() onValuesChange: EventEmitter<{ name: string, lastname: string }> = new EventEmitter<{ name: string, lastname: string }>()

  public friendForm!: FormGroup;
  private _destroyed$: Subject<void> = new Subject<void>();

  public ngOnInit(): void {
    this.friendForm = new FormGroup(friendFormConfig);
    this.friendForm.statusChanges
      .pipe(takeUntil(this._destroyed$))
      .pipe(distinctUntilChanged())
      .subscribe(value => this.onFormStatusChange.emit(value));
    this.friendForm.valueChanges
      .pipe(takeUntil(this._destroyed$))
      .pipe(distinctUntilChanged())
      .subscribe(value => this.onValuesChange.emit({
        name: this.friendForm.get('name')?.value,
        lastname: this.friendForm.get('lastname')?.value
      }));
  }

  public getErrorMessage(errors: ValidationErrors | null | undefined): string {
    return getErrorMessage(errors);
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

}
