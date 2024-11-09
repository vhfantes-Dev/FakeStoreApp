import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBiComponent } from './dados-bi.component';

describe('DadosBiComponent', () => {
  let component: DadosBiComponent;
  let fixture: ComponentFixture<DadosBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosBiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
