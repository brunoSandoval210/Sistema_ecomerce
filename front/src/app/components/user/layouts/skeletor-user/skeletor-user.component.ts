import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
@Component({
  selector: 'app-skeletor-user',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule,SliderComponent,CommonModule],
  templateUrl: './skeletor-user.component.html',
  styleUrl: './skeletor-user.component.css'
})
export class SkeletorUserComponent {
  //Variables para mostrar u ocultar el popup y el slider
  showPopup = false;
  showSlider = false;

  //Cambiar el valor de showPopup a true o false
  togglePopup():void{
    this.showPopup=!this.showPopup;
  }
  //Cambiar el valor de showSlider a true o false
  toggleSlider():void{
    this.showSlider=!this.showSlider;
  }
}
