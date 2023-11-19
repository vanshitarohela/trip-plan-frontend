import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserProcessesService } from 'src/app/shared-m/services/user/user-processes.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginDetails!: FormGroup;

  constructor(private service: UserProcessesService) {}

  ngOnInit(): void {
    this.loginDetails = new FormGroup({
      emailAddress: new FormControl(null),
      password: new FormControl(null),
    });
  }

  onFormSubmit() {
    console.log(this.loginDetails.value);
    // this.userService.insertUser(this.userDetails.value).subscribe((res) =>  {
    //   console.log(res);
    // });
  }
}
