import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },


  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },

  //{ path: 'category', component: CategoryComponent } // Define the route for the new component
  { path: 'category', loadChildren: () => import('./components/category/category.module').then(m => m.CategoryModule) }, // Lazy load CategoryModule
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'product', loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule) },
  /*{ path: 'product_details', loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule) }*/ // Lazy load CategoryModule

  // Lazy load CategoryModule



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
