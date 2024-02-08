import { Injectable } from "@angular/core";
import { Product } from "../../shared/models/Product"

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
  productsApiUrl = "http://localhost:3000/products"
    constructor() {}

    // CRUD: Create - Read - Update - Delete
    //Get All Products (Read)
    async getAllProducts(): Promise<Product[]> {
         const data = await fetch(this.productsApiUrl);
         return await data.json() ?? [];
    }
    // Get Product by Id (Read)
    async getProductById(id: number): Promise<Product | undefined>{
      const data = await fetch(`${this.productsApiUrl}/${id}}`);

      return await data.json() ?? {};
    }



    //     const products: Product[] =  [
    //         {
    //           id: 1,
    //           title: "Mobile",
    //           price: 100 ,
    //           color: "Red",
    //           discount: 10 ,
    //           photo: "../assets/products/product-1.avif" ,
    //         },
    //         {
    //           id: 2,
    //           title: "Car",
    //           price: 200 ,
    //           color: "Green",
    //           discount: 15 ,
    //           photo: "../assets/products/product-2.avif" ,
    //         },
    //         {
    //           id: 3,
    //           title: "Dress",
    //           color: "Blue",
    //           price: 100 ,
    //           discount: 10 ,
    //           photo: "../assets/products/product-3.avif" ,
    //         },
    //         {
    //           id: 4,
    //           title: "IPhone",
    //           color: "Yellow",
    //           price: 100 ,
    //           discount: 10 ,
    //           photo: "../assets/products/product-4.avif" ,
    //         },
    //         {
    //           id: 5,
    //           title: "SumSung",
    //           color: "Black",
    //           price: 200 ,
    //           discount: 15 ,
    //           photo: "../assets/products/product-5.avif" ,
    //         },
    //         {
    //           id: 6,
    //           title: "Flower",
    //           price: 100 ,
    //           color: "Red",
    //           discount: 10 ,
    //           photo: "../assets/products/product-6.avif" ,
    //         },
    //         {
    //           id: 7,
    //           title: "Glasses",
    //           color: "Red",
    //           price: 100 ,
    //           discount: 10 ,
    //           photo: "../assets/products/product-7.avif" ,
    //         },
    //       ] ;
    //       return products;


    //Add New Product
    addNewProduct(){

    }
    //Update Product
    updateProduct(){

    }
    //Delete Product
    deleteProduct(){

    }
}
