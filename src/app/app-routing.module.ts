import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import {ModalVisualizarDiagnosticoComponent} from './components/modal-visualizar-diagnostico/modal-visualizar-diagnostico.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component:PaginaPrincipalComponent
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
