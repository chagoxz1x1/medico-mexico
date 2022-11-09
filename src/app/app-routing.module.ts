import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerfilPublicoComponent } from './components/Perfil-publico/Perfil-publico.component';
import { SobreMiComponent } from './components/Sobre-Mi/Sobre-Mi.component';
import { ConsultaComponent } from './components/Consulta/Consulta.component';

const routes: Routes = [
  {path:'Perfil', component:PerfilPublicoComponent},
  {path:'Sobre Mi', component:SobreMiComponent},
  {path:'Consulta', component:ConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
