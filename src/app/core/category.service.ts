import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Category } from '../model/category';

const apiUrl=["http://localhost:8085"];

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  [x: string]: any;

  //private apiUrl = 'https://your-backend-url/api/categories'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  
  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(apiUrl+"/catalogues/api/categories/");
  }
  



}



