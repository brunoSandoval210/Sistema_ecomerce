import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselCaptionComponent,
         CarouselComponent,
         CarouselControlComponent,
         CarouselIndicatorsComponent,
         CarouselInnerComponent,
         CarouselItemComponent,
         ThemeDirective
 } from '@coreui/angular';
import { Carrousel } from '../../../../models/home/corrousel';
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
export class CarrouselComponent implements OnInit {
  @Input() carrousels:Carrousel[]=[];
  ngOnInit(): void {
  }

}
