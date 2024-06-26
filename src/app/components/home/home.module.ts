import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryModule } from '../category/category.module';



const routes: Routes = [
  { path: '', component: HomeComponent } 
];


@NgModule({
  declarations: [
    HomeComponent
    //HeroComponent  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CategoryModule

  ]
})
export class HomeModule { }
