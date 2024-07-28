import { Component } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { FilterComponent } from './filter/filter.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CategoriesComponent, FilterComponent, CommonModule,ProductListComponent, ProductItemComponent],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {

}
