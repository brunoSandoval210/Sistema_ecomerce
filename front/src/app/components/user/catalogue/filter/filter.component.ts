import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  prices = ['S/ 20.00 - S/ 40.00', 'S/ 40.00 - S/ 60.00', 'S/ 60.00 - S/ 80.00'];
  sizes = ['S', 'M', 'L', 'XL'];
  colors = ['BLUE', 'RED', 'YELLOW', 'WHITE', 'SILVER', 'BEIGE', 'VIOLET', 'GREEN'];

}
