import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-cart-products',
  standalone: true,
  imports: [],
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css'] 
})
export class CartProductsComponent{
  @Input() product!: Product;


  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();
  onAddCart(product: Product) {

    this.productEventEmitter.emit(product);
  }
  
}
