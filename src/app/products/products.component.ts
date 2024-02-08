import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../shared/models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  items = [
    {
      name: 'Spinneys Value Sponge For Glass Cookware',
      price: 3.95,
      image: '../../assets/Spinneys Value Sponge For Glass Cookware.webp'
    },
    {
      name: 'Spinneys Black Eyed Peas- 500 Gm',
      price: 14.25,
      image: '../../assets/Spinneys Black Eyed Peas- 500 Gm.webp'
    },
    {
      name: 'Abu Auf Alkafela Kamar Aldin',
      price: 34.95,
      image: '../../assets/Abu Auf Alkafela Kamar Aldin.webp'
    },
    {
      name: 'Farmer Standard Sliced Pineapple in Light Syrup',
      price: 54.95,
      image: '../../assets/Farmers Standard Sliced Pineapple in Light Syrup.webp'
    },
    {
      name: 'Spinneys Value Kitchen Grooved Sponge Scrubber- 3 Pieces',
      price: 15.95,
      image: '../../assets/Spinneys Value Kitchen Grooved Sponge Scrubber- 3 Pieces.webp'
    },
    {
      name: 'Spinneys Superme Cleaning Film 30*30Cm With Superme Foil Roll',
      price: 114.95,
      image: '../../assets/Spinneys Superme Cleaning Film 3030Cm With Superme Foil Roll.webp'
    },
  ];

  addToCart(item: any) {
    // add item to cart
    console.log('Item added to cart:', item);
  }
  }
