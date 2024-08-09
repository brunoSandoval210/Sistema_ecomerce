import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { User } from '../../../../models/users/user';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'app-skeletor-user',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule,SliderComponent,CommonModule],
  templateUrl: './skeletor-user.component.html',
  styleUrl: './skeletor-user.component.css'
})
export class SkeletorUserComponent implements OnInit{
  //Variables para mostrar u ocultar el popup y el slider
  showPopup!:boolean;
  showSlider!:boolean;
  users:User[]=[];

  // Variables para manejar el mensaje de inicio de sesión
  showLoginMessage: boolean = false;
  loginMessage: string = '';

  constructor(
    private userService:UserService
  ){
  }
  //Se inicializa la variable users con los usuarios que se encuentran en el servicio
  ngOnInit(): void {
      this.users=this.userService.findAllUsers();
  }
  //Cambiar el valor de showPopup a true o false
  togglePopup():void{
    this.showPopup=!this.showPopup;
  }
  //Cambiar el valor de showSlider a true o false
  toggleSlider():void{
    this.showSlider=!this.showSlider;
  }
  SubmitLogin(userLogin:any):void{
    const user=this.users.find(user=>user.email ===userLogin.email && user.password === userLogin.password);
    if (user) {
      // Inicio de sesión exitoso
      this.showLoginMessage = true;
      this.loginMessage = '¡Inicio de sesión exitoso!';
      // Opcional: Limpiar los datos de inicio de sesión después de un inicio de sesión exitoso
      userLogin = {};
    } else {
      // Inicio de sesión fallido
      this.showLoginMessage = true;
      this.loginMessage = 'Correo electrónico o contraseña incorrectos.';
    }
    console.log(this.loginMessage);
  }
}
