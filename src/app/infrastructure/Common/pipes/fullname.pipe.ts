import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from '../../../domain/Friend/Friend';

@Pipe({
  name: 'fullname',
  standalone: true
})
export class FullnamePipe implements PipeTransform {
  transform(value: Friend,): string {
    return `${value.name} ${value.lastname}`;
  }

}
