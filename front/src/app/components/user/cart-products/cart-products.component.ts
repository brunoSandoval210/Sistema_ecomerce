import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-cart-products',
  standalone: true,
  imports: [],
  templateUrl: './cart-products.component.html',
  styleUrl: './cart-products.component.css'
})
export class CartProductsComponent implements OnInit {

  products: Product[]=[];
   constructor(private service: ProductService){

   }
  ngOnInit(): void {
   this.products = this.service.findAll();
  }
}
