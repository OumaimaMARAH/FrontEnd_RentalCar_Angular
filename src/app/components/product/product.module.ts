import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { CategoryModule } from '../category/category.module';
import { SubcategoryModule } from '../subcategory/subcategory.module';

const routes: Routes = [
  { path: '', component: AllProductsComponent },
  //{ path: '', component: ProductDetailsComponent } // Define the route for CategoryComponent
  { path: 'details/:id', component: ProductDetailsComponent } // Define the route for ProductDetailsComponent with a parameter

];


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SubcategoryModule
  ]
})
export class ProductModule { }
