import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-visualizar-diagnostico',
  templateUrl: './modal-visualizar-diagnostico.component.html',
  styleUrl: './modal-visualizar-diagnostico.component.css'
})
export class ModalVisualizarDiagnosticoComponent {
  imageUrl: string = 'assets/fotos/prueba-ocular-optico-con-el-mensaje-de-insercion-gr4fpk.jpg';
  transform: string = 'scale(1)';
  isDragging: boolean = false;
  startPosition: { x: number; y: number } = { x: 0, y: 0 };
  translation: { x: number; y: number } = { x: 0, y: 0 };

  containerWidth: number = 800; // Ancho del contenedor en píxeles
  containerHeight: number = 600; // Alto del contenedor en píxeles

  ngOnInit() {
    // Agrega los listeners si es necesario
  }

  ngOnDestroy() {
    // Limpia los listeners si agregaste alguno
  }

  updateZoom(event: Event): void {
    const input = event.target as HTMLInputElement;
    const scaleValue = input.value;
    this.transform = `translate(${this.translation.x}px, ${this.translation.y}px) scale(${scaleValue})`;
  }

  startDrag(event: MouseEvent): void {
    this.isDragging = true;
    this.startPosition = {
      x: event.pageX - this.translation.x,
      y: event.pageY - this.translation.y
    };
  }

  onDrag(event: MouseEvent): void {
    if (!this.isDragging) return;

    let newX = event.pageX - this.startPosition.x;
    let newY = event.pageY - this.startPosition.y;

    // Calcula los límites basados en el nivel actual de zoom
    const scale = this.getScale();
    const maxX = (this.containerWidth * (scale - 1)) / 2;
    const maxY = (this.containerHeight * (scale - 1)) / 2;

    // Restringe newX y newY a los límites calculados
    newX = Math.max(Math.min(newX, maxX), -maxX);
    newY = Math.max(Math.min(newY, maxY), -maxY);

    this.translation = { x: newX, y: newY };
    this.transform = `translate(${newX}px, ${newY}px) scale(${scale})`;
  }

  endDrag(): void {
    this.isDragging = false;
  }

  getScale(): number {
    const scaleMatch = this.transform.match(/scale\(([^)]+)\)/);
    return scaleMatch ? parseFloat(scaleMatch[1]) : 1;
  }
}
