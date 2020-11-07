import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroFilmeComponent } from './primeiro-filme.component';

describe('PrimeiroFilmeComponent', () => {
  let component: PrimeiroFilmeComponent;
  let fixture: ComponentFixture<PrimeiroFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiroFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
