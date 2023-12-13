import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailesComponent } from './account-detailes.component';

describe('AccountDetailesComponent', () => {
  let component: AccountDetailesComponent;
  let fixture: ComponentFixture<AccountDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
