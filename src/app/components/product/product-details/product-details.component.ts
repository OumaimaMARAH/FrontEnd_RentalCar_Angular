import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    // Get the product ID from the route parameters
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));
      // Fetch the product details using the product ID
      this.getProductDetails(productId);
    });
  }

  getProductDetails(productId: number): void {
    this.productService.getProductById(productId).subscribe(
      (product: Product) => {
        this.selectedProduct = product;
      },
      error => {
        console.error('Error fetching product details:', error);
      }
    );
  }
}
