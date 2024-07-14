import { Injectable } from "@angular/core";
import { Carrousel } from "../models/home/corrousel";
import { carrouselData } from "../data/carrousel.data";
@Injectable({
    providedIn:'root'
})
export class CarrouselService{
    private carrousel:Carrousel[]=carrouselData;

    getCarrousel():Carrousel[]{
        return this.carrousel;
    }
}