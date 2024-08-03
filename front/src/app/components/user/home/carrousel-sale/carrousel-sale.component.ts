import { Component, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../../../models/home/card';

@Component({
  selector: 'app-carrousel-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel-sale.component.html',
  styleUrls: ['./carrousel-sale.component.css']
})
export class CarrouselSaleComponent implements OnInit, OnDestroy {
  visibleCards: Card[] = [];
  currentCardIndex = 0;
  numVisibleCards = 1;
  intervalId: any;
  @Input() cards:Card[] = [];
  
  ngOnInit(): void {
    this.updateVisibleCards();
    this.startAutoChange();
  }

  //Funcion para detener el cambio de cards automatico
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  //Funcion para cambiar las cards manualmente
  @HostListener('window:resize', ['$event'])
  onResize(event:Event): void {
    this.updateVisibleCards();
  }

  //Funcion para cambiar las cards automaticamente
  startAutoChange(): void {
    this.intervalId = setInterval(() => {
      this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
      this.updateVisibleCards();
    }, 2000);
  }

  //Muestra las cards segun el tamaño de la pantalla
  updateVisibleCards(): void {
    const width = window.innerWidth;
    if (width>=1650){
      this.numVisibleCards = 5;
    } else if(width >=1300){
      this.numVisibleCards = 4;
    } else if (width >= 1025) {
      this.numVisibleCards = 3;
    } else if (width >= 650) {
      this.numVisibleCards = 2;
    } else {
      this.numVisibleCards = 1;
    }
    // this.visibleCards = this.cards.slice(this.currentCardIndex, this.currentCardIndex + this.numVisibleCards);
    this.visibleCards = [];
    for (let i = 0; i < this.numVisibleCards; i++) {
      // Usa el módulo para envolver y comenzar desde el inicio si se alcanza el final de la lista.
      const index = (this.currentCardIndex + i) % this.cards.length;
      this.visibleCards.push(this.cards[index]);
    }
  }
}
