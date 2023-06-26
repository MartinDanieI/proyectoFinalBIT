import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url_api = 'http://localhost:4002';

  constructor(private http: HttpClient) {}

  login(userName: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(`${this.url_api}/login`, { userName, password })
      .pipe(
        tap(({ token }) => {
          localStorage.setItem('auth_token', token);
        })
      );
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('auth_token');
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');
    return token !== null;
  }
}