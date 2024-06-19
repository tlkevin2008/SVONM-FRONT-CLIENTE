import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageUpService } from 'src/app/services/imageUp.service';
import { Imagen } from 'src/app/models/image';
import { Catalogo } from 'src/app/models/catalogo';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-probador-virtual',
  templateUrl: './probador-virtual.component.html',
  styleUrls: ['./probador-virtual.component.css']
})
export class ProbadorVirtualComponent {

  listCatalogos: Catalogo[] = [];
  capturedImage: Imagen | undefined;
  selectedProductImage: string | undefined;
  showCamera = true;
  private _trigger = new Subject<void>();
  public readonly captureTrigger = this._trigger.asObservable();

  constructor(private imageUpService: ImageUpService, private _catalogoService: CatalogoService) { }

  capture(): void {
    this._trigger.next();
  }

  retake(): void {
    this.capturedImage = undefined;
    this.showCamera = true;
  }

  onImageCapture(event: any): void {
    this.capturedImage = new Imagen(event.imageAsDataUrl);
    this.showCamera = false;
  }

  uploadImage(): void {
    if (this.capturedImage) {
      this.imageUpService.uploadImage(this.capturedImage).subscribe(
        response => {
          console.log('Imagen subida con éxito', response);
        },
        error => {
          console.error('Error al subir la imagen', error);
        }
      );
    }
  }

  onProductSelect(productImageUrl: string): void {
    this.selectedProductImage = productImageUrl;
  }

  ngOnInit(): void {
    this.obtenerCatalogos();
  }

  obtenerCatalogos(){
    this._catalogoService.getCatalogos().subscribe(data => {
      console.log(data);
      this.listCatalogos = data;
    }, error => {
      console.log(error);
    })
  }
}
