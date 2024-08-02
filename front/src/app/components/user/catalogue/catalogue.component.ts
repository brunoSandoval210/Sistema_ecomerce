import { Component } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { FilterComponent } from './filter/filter.component';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CategoriesComponent, FilterComponent, CommonModule, ProductsComponent],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {

}
