export interface Order {
    rentalId: Number;
    id: Number;
    orderDate: Date;
    rentalItems: RentalItemRequestDto[];
}

interface RentalItemRequestDto {
    rentalItemId: Number;
    productId: Number;
    pickupDateTime: Date; // Assuming you want to use Date objects, adjust if necessary
    returnDateTime: Date; // Assuming you want to use Date objects, adjust if necessary
}
  