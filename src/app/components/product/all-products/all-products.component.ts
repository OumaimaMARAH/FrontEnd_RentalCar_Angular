import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/core/product.service';
import { Category } from 'src/app/model/category';
import { Subcategory } from 'src/app/model/subcategory';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  products: Product[] = [];
  categories: Category[] = [];
  subcategories: Subcategory[] = [];

  filteredProducts: Product[] = [];

  paginatedProducts: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 2;




  constructor(private productsService: ProductService) { }


  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
    this.getAllSubCategories();
  }

  getAllProducts(): void {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
      this.updatePaginatedProducts();
    })
  }


  updatePaginatedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  goToPage(page: number, event?: MouseEvent): void {
    if (event) {
      event.preventDefault();
    }
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePaginatedProducts();
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  getPaginationArray(): number[] {
    const totalPages = this.totalPages;
    const paginationArray = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationArray.push(i);
    }
    return paginationArray;
  }





  getAllCategories(): void {
    this.productsService.getAllCategories().subscribe(data => {
      this.categories = data;
      console.log('Categories loaded:', this.categories);
    })
  }

  getAllSubCategories(): void {
    this.productsService.getAllSubCategories().subscribe(data => {
      this.subcategories = data;
      //this.updatePaginatedSubCategories();
    })
  }

  getProductsBySubCategoryId(subcategoryId: Number): void {
    this.filteredProducts = this.products.filter(product => product.subCategoryId === subcategoryId);
    this.currentPage = 1; // Reset to first page
    this.updatePaginatedProducts();
  }

  searchProductsByName(keyword: string): void {
    if (keyword.trim() === '') {
      this.filteredProducts = this.products; // Reset to all products if search is empty
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.productName.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    this.currentPage = 1; // Reset to first page
    this.updatePaginatedProducts();
  }
  

}
