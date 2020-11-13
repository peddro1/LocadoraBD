import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresAvaliacoesComponent } from './melhores-avaliacoes.component';

describe('MelhoresAvaliacoesComponent', () => {
  let component: MelhoresAvaliacoesComponent;
  let fixture: ComponentFixture<MelhoresAvaliacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresAvaliacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
