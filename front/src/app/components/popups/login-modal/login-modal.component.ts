import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'login-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {

  @Output() loginEventEmitter:EventEmitter<any>=new EventEmitter<any>();
  //Se crea un formulario con los campos email y password
  loginForm:FormGroup;
  //Se inicializa el formulario
  constructor(private fb:FormBuilder){
    this.loginForm=this.fb.group({
      email: [''],
      password: ['']
    })
  }
  //Envía los datos del formulario de login al componente padre.
  onSubmit(): void {
    this.loginEventEmitter.emit(this.loginForm.value);
  }
}
