import { Component } from '@angular/core';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CarrouselSaleComponent } from './carrousel-sale/carrousel-sale.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrouselComponent,CarrouselSaleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
