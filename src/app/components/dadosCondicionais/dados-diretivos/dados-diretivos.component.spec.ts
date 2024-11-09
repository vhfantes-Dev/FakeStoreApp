import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDiretivosComponent } from './dados-diretivos.component';

describe('DadosDiretivosComponent', () => {
  let component: DadosDiretivosComponent;
  let fixture: ComponentFixture<DadosDiretivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosDiretivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosDiretivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
