import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageUpService } from 'src/app/services/imageUp.service';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-probador-virtual',
  templateUrl: './probador-virtual.component.html',
  styleUrls: ['./probador-virtual.component.css']
})
export class ProbadorVirtualComponent {

  // Variable para almacenar la imagen capturada
  capturedImage: string | any;

  // Variable para el gatillo de la captura
  private _trigger = new Subject<void>();
  public readonly captureTrigger = this._trigger.asObservable();

  constructor(private imageUpService: ImageUpService) { }

  // Método para capturar una imagen
  capture(): void {
    this._trigger.next();
  }

  uploadImage(): void {
    if (this.capturedImage) {
      const image: Image = { data: this.capturedImage };
      this.imageUpService.uploadImage(image).subscribe(
        response => {
          console.log('Image uploaded successfully', response);
        },
        error => {
          console.error('Error uploading image', error);
        }
      );
    }
  }

}
