import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Combined import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HeroComponent } from './components/hero/hero.component';
import { LayoutComponent } from './components/layout/layout.component'; // Corrected path
import { RouterModule } from '@angular/router';
//import { HomeModule } from './components/home/home.module'; // Ensure HomeModule is imported
import { HeroModule } from './components/hero/hero.module'; // Import HeroModule
//import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    SubcategoryComponent,
    ProductComponent,
    OrderComponent,
    PaymentComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HeroModule,
    //SharedModule,
    //HomeModule, // Import HomeModule here
    AppRoutingModule,
    HttpClientModule, // Add HttpClientModule to imports
    CoreModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
