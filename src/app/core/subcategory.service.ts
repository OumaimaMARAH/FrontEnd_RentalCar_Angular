import { Injectable } from '@angular/core';
import { Subcategory } from '../model/subcategory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

const apiUrl=["http://localhost:8085"];

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http: HttpClient) { }

  getAllSubCategories():Observable<Subcategory[]>{
    return this.http.get<Subcategory[]>(apiUrl+"/catalogues/api/subcategories/");
  }

  getSubCategoriesByCategoryId(categoryId: Number): Observable<Subcategory[]>{
    return this.http.get<Subcategory[]>(apiUrl+"/catalogues/api/subcategories/category/"+categoryId);
  }

  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(apiUrl+"/catalogues/api/categories/");
  }
}
