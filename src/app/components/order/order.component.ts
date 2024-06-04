import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/core/order.service';
import { Order } from 'src/app/model/order';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  newOrder: Partial<Order> = {
    rentalId: 0,
    id: 0,
    orderDate: new Date(),
    rentalItems: [
      {
        rentalItemId: 0,
        productId: 0,
        pickupDateTime: new Date(),
        returnDateTime: new Date()
      }
    ]
  };
  productId: Number;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
    this.productId = 0; // Initialize productId
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['productId']; // Assuming the route contains the product ID
      if (this.newOrder.rentalItems && this.newOrder.rentalItems.length > 0) {
        this.newOrder.rentalItems[0].productId = this.productId;
      } else {
        this.newOrder.rentalItems = [{
          rentalItemId: 0,
          productId: this.productId,
          pickupDateTime: new Date(),
          returnDateTime: new Date()
        }];
      }
    });   
  }

  createRental(): void {
    this.orderService.createRental(this.newOrder).subscribe(
      response => {
        console.log('Rental created successfully', response);
        // Handle success, maybe reset the form or show a success message
        this.resetNewOrder();
      }
      
    );
  }

  resetNewOrder(): void {
    this.newOrder = {
      rentalId: 0,
      id: 0,
      orderDate: new Date(),
      rentalItems: [
        {
          rentalItemId: 0,
          productId: this.productId, // Keep the selected product ID
          pickupDateTime: new Date(),
          returnDateTime: new Date()
        }
      ]
    };
  }
}
