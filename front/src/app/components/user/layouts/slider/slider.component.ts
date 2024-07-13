import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Output() closeSlider = new EventEmitter<void>();
  
  onClose() {
    this.closeSlider.emit();
  }
}
