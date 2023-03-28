import { Injectable } from '@angular/core';
import { Product } from './components/products/product.model';

const API_BASE = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class AppService {

  products: Product[] = [
    {
      id: '1',
      name: 'Suit 1',
      price: 229,
      sku: 292,
      quantity: 5,
      description: 'A description about this product. Adventuring and learning Angular.',
      image: 'assets/images/suit1.png'
    },
    {
      id: '2',
      name: 'Suit 2',
      price: 119,
      sku: 291,
      quantity: 5,
      description: 'A description about this product. Adventuring and learning Angular.',
      image: 'assets/images/suit2.png'
    },
    {
      id: '3',
      name: 'Suit 3',
      price: 129,
      sku: 233,
      quantity: 5,
      description: 'A description about this product. Adventuring and learning Angular.',
      image: 'assets/images/suit3.png'
    },
    {
      id: '4',
      name: 'Suit 4',
      price: 299,
      sku: 234,
      quantity: 1,
      description: 'A description about this product. Adventuring and learning Angular.',
      image: 'assets/images/suit4.png'
    },
  ]

  activeProduct: Product = this.products[0];

  constructor() { }

  setActiveProduct(id: string) {
    return
  }

  get getProducts() {
    return this.products;
  }
}
