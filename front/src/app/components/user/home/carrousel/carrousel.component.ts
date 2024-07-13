import { Component, OnInit,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselService } from '../../../../service/carrousel.service';
import { Carrousel } from '../../../../models/home/corrousel';
@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent implements OnInit,OnDestroy {
  carrousels: Carrousel[] = [];
  currentIndex = 0;
  intervalId: any;
  totalWidth: number = 0;
  // containerWidth!: string;

  constructor(private carrouselService: CarrouselService) {}

  ngOnInit() {
    this.carrousels = this.carrouselService.getCarrousel();
    // this.containerWidth = (this.carrousels.length * 100) + '%';
    this.totalWidth = this.carrousels.reduce((acc, curr) => acc + curr.width, 0);
    // this.startCarousel();
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  // startCarousel() {
  //   this.intervalId = setInterval(() => {
  //     this.nextImage();
  //   }, 3000); // Change image every 2 seconds
  // }
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.carrousels.length;
  }
  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.carrousels.length) % this.carrousels.length;
  }
}
