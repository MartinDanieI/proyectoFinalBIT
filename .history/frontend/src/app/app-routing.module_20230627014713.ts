import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ProductosGrillaComponent } from "./components/productos/productos.component";
import { ErrorPagina404Component } from "./components/error-pagina404/error-pagina404.component";
import { RegistroeventsComponent } from "./components/registroevents/registroevents.component";
import { MostrarEventosComponent } from "./components/mostrar-eventos/mostrar-eventos.component";
import { EventoWasimodoComponent } from './components/evento-wasimodo/evento-wasimodo.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';


const routes: Routes = [
  { path: "", component: EventoWasimodoComponent },
  { path: "productos/:type", component: ProductosGrillaComponent },
  { path: "event/:type", component: MostrarEventosComponent },
  { path: "error-pagina404", component: ErrorPagina404Component },
  { path: "ProductosComponent", component: ProductosGrillaComponent },
  { path: "registroEventos", component: RegistroeventsComponent },
  { path: 'eventowasimodo', component: EventoWasimodoComponent },
  { path: 'registro-usuarios', component: RegistroComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: "**", redirectTo: "error-pagina404", pathMatch: "full" },

]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
