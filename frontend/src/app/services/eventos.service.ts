import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/eventos';


@Injectable({
  providedIn: 'root'
})
export class EventosService {
url_api = "http://localhost:4002"
eventsList: any = []
imageUploaded: any = ''
  constructor(private http: HttpClient) {  }

  crearEvento(evento: Evento): Observable<any> {
    return this.http.post(`${this.url_api}/events`, evento);
  }

  cargarImagen(data: any): Observable<any> {
    return this.http.post(`${this.url_api}/upload`, data);
  }

  eventoPorCategoria(categoria: string) {
    return this.http.get(`${this.url_api}/events/category/${categoria}`);
  }
  obtenerEventos(): Observable<any> {
    return this.http.get<Evento[]>(`${this.url_api}/events?limit=20`);
  }
}

  
