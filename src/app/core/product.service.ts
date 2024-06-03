import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { Category } from '../model/category';
import { Subcategory } from '../model/subcategory';

const apiUrl=["http://localhost:8085"];


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(apiUrl+"/catalogues/api/products/");
  }






  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(apiUrl+"/catalogues/api/categories/");
  }

  getAllSubCategories():Observable<Subcategory[]>{
    return this.http.get<Subcategory[]>(apiUrl+"/catalogues/api/subcategories/");
  }

  getProductsBySubCategoryId(subcategoryId: Number): Observable<Product[]>{
    return this.http.get<Product[]>(apiUrl+"/catalogues/api/products/subcategory/"+subcategoryId);
  }

  searchProductsByName(keyword: string): Observable<Product[]>{
    return this.http.get<Product[]>(apiUrl+"/catalogues/api/products/search");
  }
}
