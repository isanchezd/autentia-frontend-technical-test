import { PaymentDatePipe } from './payment-date.pipe';

describe('PaymentDatePipe', () => {
  it('create an instance', () => {
    const pipe = new PaymentDatePipe();
    expect(pipe).toBeTruthy();
  });
});
