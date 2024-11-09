import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacaoBasicaComponent } from './animacao-basica.component';

describe('AnimacaoBasicaComponent', () => {
  let component: AnimacaoBasicaComponent;
  let fixture: ComponentFixture<AnimacaoBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimacaoBasicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimacaoBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
