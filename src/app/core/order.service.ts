import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

const apiUrl=["http://localhost:8083"];


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createRental(order: Partial<Order>):Observable<any>{
    return this.http.post(apiUrl+"/orders/api/rental/create", order);
  }
}
