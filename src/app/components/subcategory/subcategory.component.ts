import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SubcategoryService } from 'src/app/core/subcategory.service';
import { Subcategory } from 'src/app/model/subcategory';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  @Output() subcategorySelected = new EventEmitter<Number>();


  subcategories: Subcategory[] = [];
  categories: Category[] = [];
  selectedSubcategories: Subcategory[] = [];

  selectedCategoryId: Number | null = null;
  selectedSubcategoryId: Number | null = null;

  constructor(private subcategoryService: SubcategoryService) {}

  ngOnInit(): void {
    this.getAllSubCategories();
    this.getAllCategories();
  }

  getAllSubCategories(): void {
    this.subcategoryService.getAllSubCategories().subscribe(data => {
      this.subcategories = data;
    });
  }

  getSubCategoriesByCategoryId(categoryId: Number): void {
    this.selectedSubcategories = this.subcategories.filter(subcategory => subcategory.categoryId === categoryId);
  }

  onCategoryClick(categoryId: Number): void {
    console.log('Category clicked:', categoryId); // Debugging statement
    if (this.selectedCategoryId === categoryId) {
      this.selectedCategoryId = null;
      this.selectedSubcategories = [];
    } else {
      this.selectedCategoryId = categoryId;
      this.getSubCategoriesByCategoryId(categoryId);
    }
  }

  onSubcategoryClick(subcategoryId: Number): void {
    this.selectedSubcategoryId = subcategoryId;
    this.subcategorySelected.emit(subcategoryId);
  }

  getAllCategories(): void {
    this.subcategoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }
  
}
