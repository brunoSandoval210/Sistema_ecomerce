import { Component, OnInit } from '@angular/core';
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
export class CarrouselSaleComponent implements OnInit {
  cards: Card[] = [];
  currentCardIndex = 0;
  intervalId: any;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCard();
    this.startAutoChange();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoChange(): void {
    this.intervalId = setInterval(() => {
      this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
    }, 3000);
  }
}
