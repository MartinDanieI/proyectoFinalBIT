import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/eventos';


@Injectable({
  providedIn: 'root'
})
export class EventosService {
url_api = "http://localhost:4002/events"
eventsList: any = []
  constructor(private http: HttpClient) {  }

  crearEvento(evento: Evento): Observable<any> {
    return this.http.post(this.url_api, evento);
  }

  
  eventoPorCategoria(categoria: string) {
    return this.http.get(`${this.url_api}/category/${categoria}`);
  }
  obtenerEventos(): Observable<any> {
    return this.http.get<Evento[]>(`${this.url_api}?limit=20`);
  }
}

  
