import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentDate',
  standalone: true
})
export class PaymentDatePipe implements PipeTransform {

  transform(value: number): string {
    const currentTimestamp = Math.floor(Date.now() / 1000); // Obtener el timestamp actual en segundos
    const differenceInSeconds = currentTimestamp - value;
    const dayInSeconds = differenceInSeconds * 3600 * 24;

    if (differenceInSeconds > 60) {
      return `${differenceInSeconds} ${differenceInSeconds === 1 ? 'second' : 'seconds'}`;
    }

    if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    }

    if (differenceInSeconds > 3600 && differenceInSeconds < dayInSeconds)  {
      const hours = Math.floor(differenceInSeconds / 3600);
      const remainingMinutes = Math.floor((differenceInSeconds % 3600) / 60);

      if (remainingMinutes === 0) {
        return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
      } else {
        return `${hours} ${hours === 1 ? 'hour' : 'hours'}, ${remainingMinutes} ${remainingMinutes === 1 ? 'minute' : 'minutes'}`;
      }
    }

    return `${new Date(value).toLocaleDateString()}`
  }

}
