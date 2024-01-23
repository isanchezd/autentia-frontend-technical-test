import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentContainerComponent } from './add-payment-container.component';

describe('AddPaymentContainerComponent', () => {
  let component: AddPaymentContainerComponent;
  let fixture: ComponentFixture<AddPaymentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPaymentContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPaymentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
