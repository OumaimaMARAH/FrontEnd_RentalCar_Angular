export interface Category{
    categoryId : Number;
    categoryName : String;
    imageUrl : String;
    subcategories: string[]; // You can adjust the type if you have a separate subcategory model

}