import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaFilmeComponent } from './pesquisa-filme.component';

describe('PesquisaFilmeComponent', () => {
  let component: PesquisaFilmeComponent;
  let fixture: ComponentFixture<PesquisaFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
