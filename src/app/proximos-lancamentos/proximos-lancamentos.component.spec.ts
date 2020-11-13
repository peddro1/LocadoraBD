import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosLancamentosComponent } from './proximos-lancamentos.component';

describe('ProximosLancamentosComponent', () => {
  let component: ProximosLancamentosComponent;
  let fixture: ComponentFixture<ProximosLancamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximosLancamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
