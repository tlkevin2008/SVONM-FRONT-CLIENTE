import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SolicitarCitasComponent } from './components/solicitar-cita/solicitar-cita.component';

const routes: Routes = [
  {
    path: '',
    component:PaginaPrincipalComponent
  },
  {
    path: 'solicitar-cita',
    component:SolicitarCitasComponent
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
