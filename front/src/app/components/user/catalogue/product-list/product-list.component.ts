import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductListComponent {
  products = [
    { name: 'POLO BLANCO', price: 'S/ 50.00', image: 'path_to_image' },
    // Repetir para cada producto


  ];
}
