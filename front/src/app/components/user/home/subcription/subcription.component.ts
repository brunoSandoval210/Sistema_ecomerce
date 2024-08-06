import { Component,EventEmitter, Output } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-subcription',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './subcription.component.html',
  styleUrl: './subcription.component.css'
})
export class SubcriptionComponent {

  @Output() inputFormEventEmitter:EventEmitter<any>=new EventEmitter<any>();

  subscriptionForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.subscriptionForm=this.fb.group({
      email: [''],
      gender: [''],
      dob: [''],
      dataAuthorization: [false]
    })
  }

  //Envía los datos del formulario de suscripción al componente padre.
  onSubmit(): void {
    this.inputFormEventEmitter.emit(this.subscriptionForm.value);
  }
}
