import { Injectable } from '@angular/core';
import CartItem from '../../shared/models/CartItem';
import { Product } from '../../shared/models/Product';
import { Cart } from '../../shared/models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  constructor() { }

  // add naew product to cart
  addToCart(product: Product): void {
    this.cart.items.push(new CartItem(product));
    console.log(this.cart)
  }

  //display cart elements (Items)
  getCart(): Cart {
    return this.cart;
  }
}
