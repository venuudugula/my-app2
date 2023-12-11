import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StracturaldirectivesComponent } from './stracturaldirectives.component';

describe('StracturaldirectivesComponent', () => {
  let component: StracturaldirectivesComponent;
  let fixture: ComponentFixture<StracturaldirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StracturaldirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StracturaldirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
