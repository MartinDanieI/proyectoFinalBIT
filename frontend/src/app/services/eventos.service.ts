import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/eventos';


@Injectable({
  providedIn: 'root'
})
export class EventosService {
url_api = "http://localhost:4002/events"
  constructor(private http: HttpClient) {  }

  crearEvento(evento: Evento): Observable<any> {
    return this.http.post(this.url_api, evento);
  }

  obtenerEventos(): Observable<any> {
    return this.http.get<Evento[]>(`${this.url_api}?limit=20`);
  }

  obtenerEventoPorNombre(nombre: string): Observable<any> {
    return this.http.get<Evento[]>(`${this.url_api}/${nombre}`);
  }
  putEvento(id:string, dataEvento:Evento): Observable<any>{
    return this.http.put(`${this.url_api}/events/${id}`, dataEvento)
}
deleteEvento(id:string): Observable<any>{
  return this.http.delete(`${this.url_api}/${id}`)
}
}


