import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
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

  activeProduct: Product | null = null

  setProduct(id: number) {
    const productIndex = this.products.findIndex((product) => product.id == id.toString())
    this.activeProduct = this.products[productIndex];
  }
}
