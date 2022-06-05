import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path:'inicio', component:InicioComponent},
    {path:'usuario', component:UsuarioComponent},
    {path:'noticias', component:NoticiasComponent},
    {path: 'crear-usuario', component:CrearUsuarioComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
