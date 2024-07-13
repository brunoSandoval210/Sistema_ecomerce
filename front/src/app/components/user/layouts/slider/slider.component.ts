import { Component,Output,EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Output() closeSlider = new EventEmitter<void>();
  
  onClose() {
    this.closeSlider.emit();
  }
}
