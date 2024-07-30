import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-subcription',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './subcription.component.html',
  styleUrl: './subcription.component.css'
})
export class SubcriptionComponent implements OnInit {
  subscribeForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subscribeForm = this.fb.group({
      email: [''],
      gender: [''],
      dob: [''],
      dataAuthorization: [false]
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.subscribeForm.value);
  }
}
