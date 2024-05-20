import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { WebcamModule } from 'ngx-webcam';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

import { SolicitarCitasComponent } from './components/solicitar-cita/solicitar-cita.component';
import { ProbadorVirtualComponent } from './components/probador-virtual/probador-virtual.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ModalVisualizarDiagnosticoComponent } from './components/modal-visualizar-diagnostico/modal-visualizar-diagnostico.component';
import { ContactosComponent } from './components/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    CarouselComponent,
    SolicitarCitasComponent,
    ProbadorVirtualComponent,
    CatalogoComponent,
    ServiciosComponent,
    ModalVisualizarDiagnosticoComponent,
    ContactosComponent,
    NosotrosComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    WebcamModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
