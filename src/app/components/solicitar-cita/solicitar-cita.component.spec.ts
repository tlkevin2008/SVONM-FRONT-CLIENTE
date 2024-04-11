import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarCitasComponent } from './solicitar-cita.component';

describe('SolicitarCitaComponent', () => {
  let component: SolicitarCitasComponent;
  let fixture: ComponentFixture<SolicitarCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarCitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
