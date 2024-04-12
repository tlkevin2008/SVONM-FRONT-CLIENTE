import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ModalVisualizarDiagnosticoComponent } from './components/modal-visualizar-diagnostico/modal-visualizar-diagnostico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    ModalVisualizarDiagnosticoComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
