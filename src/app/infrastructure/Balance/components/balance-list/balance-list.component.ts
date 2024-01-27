import { Component, Input } from '@angular/core';
import { Balance } from '../../../../domain/Balance/Balance';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from '../../../Common/pipes/fullname.pipe';
import { AmountPipe } from '../../../Common/pipes/amount.pipe';

@Component({
  selector: 'app-balance-list',
  standalone: true,
  imports: [CommonModule, AmountPipe, FullnamePipe],
  templateUrl: './balance-list.component.html',
  styleUrl: './balance-list.component.css'
})
export class BalanceListComponent {
  @Input() balances!: Balance[]

}
