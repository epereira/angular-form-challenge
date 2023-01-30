import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  model: User = new User('', '', '', '');
  constructor() { }
  onSubmit(): void {
    // form submitted
    console.log(this.model);
  }

}
