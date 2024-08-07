import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../models/product';
import { CartProductsComponent } from '../cart-products/cart-products.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CartProductsComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Asegúrate de que el nombre es correcto: styleUrls
})
export class ProductsComponent implements OnInit {
  @Input() products!: Product[];

  ngOnInit(): void {}

  trackByFn(index: number, item: Product): number {
    return item.id; // Suponiendo que cada producto tiene una propiedad `id`
  }

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();
  onAddCart(product: Product) {
    this.productEventEmitter.emit(product);
  }
  
}
