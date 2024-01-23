import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFriendContainerComponent } from './add-friend-container.component';

describe('AddFriendContainerComponent', () => {
  let component: AddFriendContainerComponent;
  let fixture: ComponentFixture<AddFriendContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFriendContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFriendContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
