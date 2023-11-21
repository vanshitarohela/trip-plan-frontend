import { Component } from '@angular/core';
import { User } from 'src/app/shared-m/model/interfaces';
import { UserProcessesService } from 'src/app/shared-m/services/user/user-processes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  user?: User

  constructor(private userService: UserProcessesService) {
    this.user = this.userService.getSignedInUser();
  }
}
