import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductosGrillaComponent } from './components/productos/productos.component';
import { ErrorPagina404Component } from './components/error-pagina404/error-pagina404.component';
import { GestionProductosVistaComponent } from './components/admin/gestion-productos-vista/gestion-productos-vista.component';
import { GestionProductosFormularioComponent } from './components/admin/gestion-productos-formulario/gestion-productos-formulario.component';
import { RegistroeventsComponent } from './components/registroevents/registroevents.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MostrarEventosComponent } from './components/mostrar-eventos/mostrar-eventos.component';
import { EventosSocialesComponent } from './components/mostrar-eventos/eventos-sociales/eventos-sociales.component';
import { EventoWasimodoComponent } from './components/evento-wasimodo/evento-wasimodo.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventoNombreComponent } from './components/evento-nombre/evento-nombre.component';
import { EventosSharedService } from './services/eventos-shared.service';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DetalleEventoComponent } from './components/detalle-evento/detalle-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    SidebarComponent,
    ProductosGrillaComponent,
    ErrorPagina404Component,
    GestionProductosVistaComponent,
    GestionProductosFormularioComponent,
    RegistroeventsComponent,
    MostrarEventosComponent,
    EventosSocialesComponent,
    EventoWasimodoComponent,
    EventoNombreComponent,
    RegistroComponent,
    LoginComponent,
    PerfilComponent,
    DetalleEventoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [EventosSharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

