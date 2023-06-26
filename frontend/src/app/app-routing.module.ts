import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosGrillaComponent } from './components/productos/productos.component';
import { ErrorPagina404Component } from './components/error-pagina404/error-pagina404.component'
import { RegistroeventsComponent } from './components/registroevents/registroevents.component';
import { EventoWasimodoComponent } from './components/evento-wasimodo/evento-wasimodo.component';


const routes: Routes = [
    {path:'', component:InicioComponent},
    {path:'productos', component:ProductosGrillaComponent},
    {path: 'error-pagina404', component:ErrorPagina404Component},
    {path: ' ProductosComponent', component: ProductosGrillaComponent },
    {path:'registroEventos', component: RegistroeventsComponent},
    {path: 'eventowasimodo', component: EventoWasimodoComponent},
    {path:'**', redirectTo:'404',pathMatch:'full'}
];




@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
