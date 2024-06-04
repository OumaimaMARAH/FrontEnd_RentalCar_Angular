import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8088';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: {email: string, password: string}): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials)
      .pipe(tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
      }));
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}

/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8088';
  apiUrl: any;
  router: any;

  constructor(private http: HttpClient) {}
  logout() {
    // Clear any authentication tokens or user data
    // Clear tokens and user data
    localStorage.removeItem('token'); // Assuming token is stored in localStorage
    localStorage.removeItem('user');  // Assuming user data is stored in localStorage

    // Redirect to LoginComponent
    this.router.navigate(['/login']);
  }

  login(credentials: {email:String, password:String}):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials)
      .pipe(tap(response=> {
        if(response && response.token){
          localStorage.setItem('token',response.token);
        }
      }));

  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }
 /* logout():void{
    localStorage.removeItem('token');
  }*/

 /* isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }

}*/
