import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SharingDataService{
    private _categorySexEventEmitter:EventEmitter<string>=new EventEmitter<string>();
    get categorySexEventEmitter():EventEmitter<string>{
        return this._categorySexEventEmitter;
  }
}