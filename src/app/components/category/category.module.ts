import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent } // Define the route for CategoryComponent
];

@NgModule({
  declarations: [
    CategoryComponent
    //HeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CategoryComponent // Ensure CategoryComponent is exported
  ]
})
export class CategoryModule { }
