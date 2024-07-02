import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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

  productImageStyles: any = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '150px', // Ajusta el tamaño inicial del producto
    height: 'auto',
    position: 'absolute',
    pointerEvents: 'auto'
  };

  // Estado para controlar el movimiento y escalado del producto seleccionado
  isMovingProduct = false;
  initialMouseX = 0;
  initialMouseY = 0;
  initialTop = 0;
  initialLeft = 0;
  initialWidth = 0;
  initialHeight = 0;

  constructor(private imageUpService: ImageUpService, private elementRef: ElementRef, private _catalogoService: CatalogoService) { }

  capture(): void {
    this._trigger.next();
  }

  retake(): void {
    this.capturedImage = undefined;
    this.selectedProductImage = undefined; // Limpiar la imagen seleccionada al volver a capturar
    this.productImageStyles = {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      pointerEvents: 'auto'
    };
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
    this.productImageStyles.pointerEvents = 'auto'; // Habilitar eventos de puntero al seleccionar un producto
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isMovingProduct && this.selectedProductImage && this.capturedImage) {
      const container = this.elementRef.nativeElement.querySelector('.captured-image-container');
      const target = this.elementRef.nativeElement.querySelector('.product-image');
      if (!container || !target) return;

      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      // Calcular el desplazamiento desde el punto inicial
      let offsetX = event.clientX - this.initialMouseX + this.initialLeft;
      let offsetY = event.clientY - this.initialMouseY + this.initialTop;

      // Asegurarse de que la imagen seleccionada se mantenga dentro de los límites de la imagen capturada
      if (offsetX < 0) offsetX = 0;
      if (offsetX + targetRect.width > containerRect.width) offsetX = containerRect.width - targetRect.width;
      if (offsetY < 0) offsetY = 0;
      if (offsetY + targetRect.height > containerRect.height) offsetY = containerRect.height - targetRect.height;

      // Actualizar las coordenadas de la imagen del producto
      this.productImageStyles.left = `${offsetX}px`;
      this.productImageStyles.top = `${offsetY}px`;
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    if (this.selectedProductImage && this.capturedImage) {
      const target = this.elementRef.nativeElement.querySelector('.product-image');
      if (!target) return;

      this.isMovingProduct = true;
      this.initialMouseX = event.clientX;
      this.initialMouseY = event.clientY;
      this.initialTop = target.offsetTop;
      this.initialLeft = target.offsetLeft;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isMovingProduct = false;
  }

  scaleImage(factor: number): void {
    if (this.selectedProductImage && this.productImageStyles.width) {
      // Calcular el nuevo tamaño
      let newWidth = parseInt(this.productImageStyles.width) * factor;

      // Ajustar la altura proporcionalmente
      let aspectRatio = newWidth / parseInt(this.productImageStyles.width);
      let newHeight = parseInt(this.productImageStyles.height) * aspectRatio;

      // Aplicar los nuevos estilos
      this.productImageStyles.width = `${newWidth}px`;
      this.productImageStyles.height = `${newHeight}px`;
    }
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
