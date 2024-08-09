import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../data/product.data';
import { SharingDataService } from './sharing-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private selectCategorySex:string='';
  constructor(private sharingDataService:SharingDataService) { 
    this.sharingDataService.categorySexEventEmitter.subscribe(categorySex=>{
      this.selectCategorySex=categorySex;
    })
  }

  findAll(): Product[]{
    return products;
  }
  findAllByCategorySex(): Product[] {
    return products.filter(product => product.categorySex === this.selectCategorySex);
  }
}
