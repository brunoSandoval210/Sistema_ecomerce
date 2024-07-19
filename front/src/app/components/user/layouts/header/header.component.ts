import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SliderComponent, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showSlider = false;
  showPopup = false;

  toggleSlider() {
    this.showSlider = !this.showSlider;
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

preventDefault(event: Event) {
  event.preventDefault();

}

}
