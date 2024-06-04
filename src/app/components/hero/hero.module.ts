import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { CategoryModule } from '../category/category.module'; // Import CategoryModule


@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    CategoryModule
  ],
  exports: [HeroComponent

  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HeroModule { }
