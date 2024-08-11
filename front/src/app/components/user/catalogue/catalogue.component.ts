import { Component, OnInit } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { FilterComponent } from './filter/filter.component';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { Product } from '../../../models/product';
import { ProductService } from '../../../service/product.service';
import { CartComponent } from './cart/cart.component';
import { CartItem } from '../../../models/cartItem';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CategoriesComponent, FilterComponent, CommonModule, ProductsComponent, CartProductsComponent, CartComponent],
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'] // Asegúrate de que el nombre es correcto: styleUrls
})
export class CatalogueComponent implements OnInit {
  products: Product[] = [];

  items: CartItem[] = [];


  
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.products = this.service.findAllByCategorySex();
  }

  onAddCart(product:Product) {
    const hasItem = this.items.find( item => item.product.id == product.id); // Este código busca los elementos/items
    if(hasItem) {
      this.items = this.items.map(item => {
        if (item.product.id === product.id){
          return{
            ... item,
            quantity: item.quantity + 1
          }
        }
        return item;
      })
    }else {
      this.items = [... this.items, { product: {...product}, quantity: 1}]
    }
  }
}

