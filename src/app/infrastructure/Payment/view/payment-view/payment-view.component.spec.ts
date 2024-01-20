import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentViewComponent } from './payment-view.component';

describe('PaymentViewComponent', () => {
  let component: PaymentViewComponent;
  let fixture: ComponentFixture<PaymentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('When payments was previously stored, the list of the payments should be in the DOM', () => {

  })
});
