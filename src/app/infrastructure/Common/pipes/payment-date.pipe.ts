import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentDate',
  standalone: true
})
export class PaymentDatePipe implements PipeTransform {

  transform(value: number): string {
    const currentTimestamp = Math.floor(Date.now() / 1000); // Obtener el timestamp actual en segundos
    const valueTimeStamp = Math.floor(value / 1000);
    const differenceInSeconds = currentTimestamp - valueTimeStamp;
    const dayInSeconds = differenceInSeconds * 3600 * 24;

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} ${differenceInSeconds === 1 ? 'second' : 'seconds'}`;
    }

    if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    }

    if (differenceInSeconds > 3600 && differenceInSeconds < dayInSeconds)  {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    }

    return `${new Date(value).toLocaleDateString()}`
  }

}
