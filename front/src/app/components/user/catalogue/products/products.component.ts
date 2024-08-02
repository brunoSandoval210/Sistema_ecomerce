import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../service/product.service';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.products = this.service.findAll();
  }

  trackByFn(index: number, item: Product) {
    return index; // o return item.id si cada producto tiene un ID único
  }
}