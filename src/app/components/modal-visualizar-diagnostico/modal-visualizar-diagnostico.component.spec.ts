import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVisualizarDiagnosticoComponent } from './modal-visualizar-diagnostico.component';

describe('ModalVisualizarDiagnosticoComponent', () => {
  let component: ModalVisualizarDiagnosticoComponent;
  let fixture: ComponentFixture<ModalVisualizarDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalVisualizarDiagnosticoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalVisualizarDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
