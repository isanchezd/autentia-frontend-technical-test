import { Pipe, PipeTransform } from '@angular/core';
import { Amount } from '../../../domain/Amount';
import CurrencySymbols from '../../../domain/CurrencySymbols';

@Pipe({
  name: 'amount',
  standalone: true
})
export class AmountPipe implements PipeTransform {

  transform(value: Amount): string {
    const currencySymbol: string = CurrencySymbols[value.currency]
    return `${value.amount} ${currencySymbol}`
  }

}
