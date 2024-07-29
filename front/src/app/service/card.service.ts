import { Card } from "../models/home/card";
import { cardData } from "../data/card.data";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class CardService{
    private card:Card[]=cardData;

    getCard():Card[]{
        return this.card;
    }
}