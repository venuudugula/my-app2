import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetbankingComponent } from './netbanking.component';

describe('NetbankingComponent', () => {
  let component: NetbankingComponent;
  let fixture: ComponentFixture<NetbankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetbankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetbankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
