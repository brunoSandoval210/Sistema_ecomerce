import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from '../../../../service/card.service';
import { Card } from '../../../../models/home/card';

@Component({
  selector: 'app-carrousel-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel-sale.component.html',
  styleUrls: ['./carrousel-sale.component.css']
})
export class CarrouselSaleComponent implements OnInit, OnDestroy {
  cards: Card[] = [];
  visibleCards: Card[] = [];
  currentCardIndex = 0;
  numVisibleCards = 1;
  intervalId: any;
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getCard();
    this.updateVisibleCards();
    this.startAutoChange();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:Event): void {
    this.updateVisibleCards();
  }

  startAutoChange(): void {
    this.intervalId = setInterval(() => {
      this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
      this.updateVisibleCards();
    }, 3000);
  }

  updateVisibleCards(): void {
    const width = window.innerWidth;
    if(width >=1300){
      this.numVisibleCards = 4;
    } else if (width >= 1025) {
      this.numVisibleCards = 3;
    } else if (width >= 750) {
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
