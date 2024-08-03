import { Component, OnInit } from '@angular/core';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CarrouselSaleComponent } from './carrousel-sale/carrousel-sale.component';
import { SubcriptionComponent } from './subcription/subcription.component';
import { CarrouselService } from '../../../service/carrousel.service';
import { Carrousel } from '../../../models/home/corrousel';
import { CardService } from '../../../service/card.service';
import { Card } from '../../../models/home/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrouselComponent,CarrouselSaleComponent,SubcriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  carrousels:Carrousel[] = [];
  cards:Card[] = [];
  inputForm:any={
    email:[''],
    gender:[''],
    dob:[''],
    dataAuthorization:[false]
  }
  //Inyecta los servicios de carrousel y card.
  constructor(
    private carrouselService:CarrouselService,
    private cardService:CardService
  ){}
  //Obtiene los datos de los carrouseles y las cards.
  ngOnInit(): void {
    this.carrousels=this.carrouselService.getCarrousel();
    this.cards=this.cardService.getCard();
  }

  //Recibe los datos del formulario de suscripción.
  submitForm(data:any): void {
    this.inputForm=data;
    console.log(this.inputForm);
  }
}
