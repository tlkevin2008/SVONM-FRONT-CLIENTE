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
    { image: 'https://lh3.googleusercontent.com/p/AF1QipMpChJOvoiMR7MMHKwp4RhGuuQx0lwzz2TrxM-F=w960-h960-n-o-k-v1', caption: 'Visita la Optica Nuevo Mundo', description: 'Cristian Flores es el optometrista que realiza el procedimiento de la refracción.' },
    { image: 'https://scripturesmediacdn.saviorconnect.com/images/scriptures-saviorconnect/media/images/rv1909-23305/23305-blue-bokeh-star-burst-rv1909-mateo-6-22_preview.jpg', caption: 'Mensaje de buena fe', description: '' },
    { image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOK8P6ZPvkx_hxjs3WaRJgrxwPAPj-dI0QTbX9ev2kohAs5bH7creKH27Pnb5pWTxJuqOGo5azFmLNk7uqWngbgIaLywX3KE9IoXJJE-TF4YmwT4w17lg5-qHiGkAPbTMe67YfC2xXb56UR-OuJfmiII0UrhNt3wWsMeLt-N5QLsZUjYXWN_DfP7IC3Q/s16000/WhatsApp%20Image%202023-11-14%20at%201.58.08%20PM%20(1).jpeg', caption: 'Un catálogo bastante variado', description: '' },
    { image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjox20OhkO1C-bUEANKUx0mtki7lAiP_5HFFMrLqapgLuQOwW5DL25XHINQCcqUNp7xcCqsmBIO1pN7ybYf7GxVdiqXdkdYTF4xWOdCFOi-1ZHZQLwDh7hr66dxfX0JqN6xIoFNM9t92TYw54fU7M57c8QDNXJFGdKHaGy8ztzFcCEAU_mBhzyDNNx_9Q/s16000/WhatsApp%20Image%202023-11-14%20at%201.58.07%20PM.jpeg', caption: 'Atención de calidad', description: '' }
  ];
}
