import { Component } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  };

  slides = [
    { image: '/assets/fotos/foto-principal.jpg', caption: 'Visita la Optica Nuevo Mundo', description: 'Cristian Flores es el optometrista que realiza el procedimiento de la refracción.' },
    { image: 'https://scripturesmediacdn.saviorconnect.com/images/scriptures-saviorconnect/media/images/rv1909-23305/23305-blue-bokeh-star-burst-rv1909-mateo-6-22_preview.jpg', caption: 'Mensaje de buena fe', description: '' },
    { image: '/assets/fotos/estante-monturas.jpeg', caption: 'Un catálogo bastante variado', description: '' },
    { image: '/assets/fotos/foto-especialista.jpeg', caption: 'Atención de calidad', description: '' }
  ];
}
