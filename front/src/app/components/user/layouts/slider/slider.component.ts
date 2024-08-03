import { Component,Output,EventEmitter, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  //Recibir el valor de showSlider desde el componente padre
  @Input() showSlider:boolean=false;
  //Emitir el valor de showSlider al componente padre
  @Output() showSliderEventEmitter:EventEmitter<boolean> = new EventEmitter<boolean>();
  //Cambiar el valor de showSlider a true o false
  onClose():void{
    this.showSliderEventEmitter.emit(!this.showSlider);
  }
}
