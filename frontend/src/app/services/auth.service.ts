import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url_api = 'http://localhost:4002';
  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated());


  constructor(private http: HttpClient) {}

  getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  login(userName: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(`${this.url_api}/login`, { userName, password })
      .pipe(
        tap(({ token }) => {
          localStorage.setItem('auth_token', token);
          this.authStatus.next(true);
        })
      );
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    this.authStatus.next(false);
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');
    return token !== null;
  }
}