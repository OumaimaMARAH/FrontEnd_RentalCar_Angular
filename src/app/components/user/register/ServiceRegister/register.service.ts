import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:8088';

  constructor(private http: HttpClient) { }

  
  register(user: { firstname: string, lastname: string, email: string, numberPhone: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, user);
  }
  

 
}
