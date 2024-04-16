import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import {ModalVisualizarDiagnosticoComponent} from './components/modal-visualizar-diagnostico/modal-visualizar-diagnostico.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SolicitarCitasComponent } from './components/solicitar-cita/solicitar-cita.component';
import { ProbadorVirtualComponent } from './components/probador-virtual/probador-virtual.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

import { ServiciosComponent } from './components/servicios/servicios.component';


const routes: Routes = [
  {
    path: '',
    component:PaginaPrincipalComponent
  },

  { path: 'servicios', 
  component: ServiciosComponent },
  {

    path: 'solicitar-cita',
    component:SolicitarCitasComponent
  },
  {
    path: 'probador-virtual',
    component:ProbadorVirtualComponent
  },

  {
    path: 'catalogo', component: CatalogoComponent
  },
  { 

    path:'modal-visualizar-diagnostico',
    component:ModalVisualizarDiagnosticoComponent
  },
  {
    path: '**', redirectTo:'', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
