import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-skeletor-user',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule],
  templateUrl: './skeletor-user.component.html',
  styleUrl: './skeletor-user.component.css'
})
export class SkeletorUserComponent {

}
