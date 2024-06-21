import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-virtual-try-on',
  templateUrl: './virtual-try-on.component.html',
  styleUrls: ['./virtual-try-on.component.css']
})
export class VirtualTryOnComponent {
  capturedImage: string | undefined;
  captureTrigger$: Subject<void> = new Subject<void>();
  isVRMode: boolean = false;

  constructor() {}

  capture(): void {
    this.captureTrigger$.next(); // Emitir evento para captura de imagen
  }

  onImageCaptured(event: any): void {
    this.capturedImage = event.imageAsDataUrl; // Capturar imagen y mostrar en A-Frame y <img>
  }

  applyGlasses(): void {
    // Aplicar lentes sobre la imagen capturada o la vista de la cámara
    const lentesEntity = document.getElementById('lentes');
    if (lentesEntity) {
      // Ajustar posición, rotación, escala, etc. de los lentes
      lentesEntity.setAttribute('position', '0 1 -3'); // Ejemplo de ajuste de posición
    }
  }

  toggleVR(): void {
    this.isVRMode = !this.isVRMode;

    // Ocultar el plano con la imagen capturada en el modo normal
    if (!this.isVRMode) {
      const backgroundPlane = document.getElementById('background');
      if (backgroundPlane) {
        backgroundPlane.setAttribute('visible', 'false');
      }
    }
  }
}
