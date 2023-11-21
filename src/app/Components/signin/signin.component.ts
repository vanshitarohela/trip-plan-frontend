import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProcessesService } from 'src/app/shared-m/services/user/user-processes.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginDetails!: FormGroup;

  constructor(private userService: UserProcessesService, private router: Router) {}

  ngOnInit(): void {
    this.loginDetails = new FormGroup({
      emailAddress: new FormControl(null),
      password: new FormControl(null),
    });
  }

  onFormSubmit() {
    console.log(this.loginDetails.value);
    this.userService.verifyAuthentication(this.loginDetails.value).subscribe((res) =>  {
      console.log(res);
      this.userService.updateUserInLocalStorage(res);
      this.router.navigate(['home'])
    },
    (error: HttpErrorResponse) => {
      console.log(error);      
    });
  }
}
