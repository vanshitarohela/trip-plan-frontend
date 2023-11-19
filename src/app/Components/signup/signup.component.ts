import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProcessesService } from 'src/app/shared-m/services/user/user-processes.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  userDetails!: FormGroup;

  constructor(private userService: UserProcessesService) {}

  ngOnInit(): void {
    this.userDetails = new FormGroup({
      name: new FormControl(null),
      emailAddress: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl(null)
    });
  }

  onFormSubmit() {
    console.log(this.userDetails.value);
    this.userService.insertUser(this.userDetails.value).subscribe((res) =>  {
      console.log(res);
    });
  }
}
