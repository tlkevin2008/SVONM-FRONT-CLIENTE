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

  containerWidth: number = 500; // Ancho del contenedor en píxeles
  containerHeight: number = 800; // Alto del contenedor en píxeles

  ngOnInit() {
    // Agrega los listeners si es necesario
  }

  ngOnDestroy() {
    // Limpia los listeners si agregaste alguno
  }

  updateZoom(event: Event): void {
    const input = event.target as HTMLInputElement;
    const newScale = parseFloat(input.value);
    
    // Actualiza la transformación de escala.
    this.transform = `scale(${newScale})`;

    // Recalcula y ajusta la posición para asegurar que la imagen esté centrada y dentro de los límites.
    const maxX = (this.containerWidth * (newScale - 1)) / 2;
    const maxY = (this.containerHeight * (newScale - 1)) / 2;

    // Ajustar translation.x y translation.y dentro de los nuevos límites
    const newX = Math.max(Math.min(this.translation.x, maxX), -maxX);
    const newY = Math.max(Math.min(this.translation.y, maxY), -maxY);
    
    this.translation = { x: newX, y: newY };

    // Actualizar la transformación para incluir la nueva traducción.
    this.transform = `translate(${newX}px, ${newY}px) scale(${newScale})`;
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
