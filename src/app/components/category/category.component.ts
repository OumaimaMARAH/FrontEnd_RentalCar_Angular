import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/category.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  categories: Category[] = [];
  newCategory: Partial<Category> = {
    categoryName: '',
    imageUrl: ''
  };

  constructor(private categoriesService: CategoryService) {
  }

  ngOnInit(): void {
    // Fetch all categories when the component initializes
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categoriesService.getAllCategories().subscribe(data => {
      this.categories = data;
    })
  }

  

}

