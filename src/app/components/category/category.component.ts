// src/app/category/category.component.ts
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/core/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: { categoryId: number, categoryName: string }[] = [
    { categoryId: 1, categoryName: 'Category 1' },
    { categoryId: 2, categoryName: 'Category 2' },
    // Add more categories as needed
  ];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService['getCategories']().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }
  getCategoryImage(categoryId: number): string {
    switch (categoryId) {
      case 1:
        return `path/to/image/${categoryId}.jpg`;

      case 2:
        return `path/to/image/${categoryId}.jpg`;

      case 3:
        return `path/to/image/${categoryId}.jpg`;

      // Add more cases for other categories
      default:
        return `path/to/image/${categoryId}.jpg`;
          
  }
}
}
