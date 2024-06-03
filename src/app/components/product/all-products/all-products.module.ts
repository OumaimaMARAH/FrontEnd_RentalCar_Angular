import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryModule } from '../../subcategory/subcategory.module';
import { AllProductsComponent } from './all-products.component';



@NgModule({
  declarations: [
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    //SubcategoryModule
  ]
})
export class AllProductsModule { }
