import { Component } from '@angular/core';
import { User } from 'src/app/shared-m/model/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userFromLocal!: User;
  
  constructor() {
    var user = localStorage.getItem("user");
    if (user) {
      this.userFromLocal = JSON.parse(user);
      console.log(this.userFromLocal);
    }
  }
}
