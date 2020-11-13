import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisPopularesComponent } from './mais-populares.component';

describe('MaisPopularesComponent', () => {
  let component: MaisPopularesComponent;
  let fixture: ComponentFixture<MaisPopularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisPopularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
