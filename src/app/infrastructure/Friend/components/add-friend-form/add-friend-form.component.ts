import { CommonModule } from '@angular/common';
import { Component, Output, Input, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, FormControlStatus, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Subject, distinctUntilChanged, takeUntil } from 'rxjs';

const friendFormConfig = {
  name: new FormControl('', [Validators.required]),
  lastname: new FormControl('', [Validators.required])
}

interface ErrorMessages {
  [key: string]: string;
}

const ERROR_MESSAGES: ErrorMessages = {
  required: 'This field is required'
}

@Component({
  selector: 'app-add-friend-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-friend-form.component.html',
  styleUrl: './add-friend-form.component.css'
})
export class AddFriendFormComponent implements OnInit, OnDestroy {
  @Input() isSubmited!: boolean;
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

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  public getErrorMessage(errors: ValidationErrors | null | undefined) {
    let message: string = '';

    if (errors) {
      const keys = Object.keys(errors)
      const firstKey = keys[0];
      message = ERROR_MESSAGES[firstKey];
    }

    return message;
  }

}
