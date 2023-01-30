import { Component } from '@angular/core';
import { Order } from './order';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  model: Order = new Order('', 1, new Date(), '');
  constructor() { }
  onSubmit(): void {
    // form submitted
    console.log(this.model);
  }
}
