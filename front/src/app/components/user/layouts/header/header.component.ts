import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SliderComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showSlider = false;

  toggleSlider() {
    this.showSlider = !this.showSlider;
    // console.log('showSlider:', this.showSlider);
  }
}
