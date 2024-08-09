import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoginModalComponent } from '../../../popups/login-modal/login-modal.component';
import { SharingDataService } from '../../../../service/sharing-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink,LoginModalComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //Recibir el valor de showPopup desde el componente padre
  @Input()showPopup:boolean=false;
  //Recibir el valor de showSlider desde el componente padre
  @Input()showSlider:boolean=false;
  //Emitir el valor de showSlider al componente padre
  @Output() showSliderEventEmitter:EventEmitter<boolean>=new EventEmitter<boolean>();
  //Emitir el valor de showPopup al componente padre
  @Output() showPopupEventEmitter:EventEmitter<boolean>=new EventEmitter<boolean>();
  //Emitir el valor de login al componente padre
  @Output() loginEventEmitter:EventEmitter<any>=new EventEmitter<any>();
  constructor(private sharingDataService:SharingDataService){

  }
  //Cambiar el valor de showPopup a true o false
  togglePopupHandler():void{
    this.showPopupEventEmitter.emit();
  }
  //Cambiar el valor de showSlider a true o false
  toggleSliderHandler():void{
    this.showSliderEventEmitter.emit();
  }
  preventDefault(event:Event):void{
    event.preventDefault();
  }
  SubmitLogin(login:any):void{
    this.loginEventEmitter.emit(login);
  }
  preventClose(event: Event):void {
    event.stopPropagation();
  }
  handlerCategorySex(selectedCategorySex:string):void{
    this.sharingDataService.categorySexEventEmitter.emit(selectedCategorySex);
  }
}
