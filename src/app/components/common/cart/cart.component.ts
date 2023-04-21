// This components to show cart user in github
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsers } from 'src/app/store/modules/user.selectore';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  constructor(
    private store: Store
  ) {}
  users = this.store.select(selectUsers);

}
