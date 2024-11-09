import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeBasicoComponent } from './pipe-basico.component';

describe('PipeBasicoComponent', () => {
  let component: PipeBasicoComponent;
  let fixture: ComponentFixture<PipeBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeBasicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
