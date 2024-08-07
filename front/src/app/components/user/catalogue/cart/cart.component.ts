import { Component, Input } from '@angular/core';
import { CartItem } from '../../../../models/cartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent {

  @Input() items: CartItem[] = [];


}
