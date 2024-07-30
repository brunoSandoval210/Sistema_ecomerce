import { Component, OnInit,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrouselService } from '../../../../service/carrousel.service';
import { Carrousel } from '../../../../models/home/corrousel';
import { RouterLink } from '@angular/router';
import { CarouselCaptionComponent,
         CarouselComponent,
         CarouselControlComponent,
         CarouselIndicatorsComponent,
         CarouselInnerComponent,
         CarouselItemComponent,
         ThemeDirective
 } from '@coreui/angular';
@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [
    CommonModule,
    CarouselCaptionComponent,
    CarouselComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    ThemeDirective,
    RouterLink
  ],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent implements OnInit/*OnDestroy*/ {
  carrousels: Carrousel[] = [];

  constructor(private carrouselService: CarrouselService) {}
  
  //Funcion para inicializar las cards con los datos del servicio
  ngOnInit(): void {
    this.carrousels = this.carrouselService.getCarrousel();
  }
}
