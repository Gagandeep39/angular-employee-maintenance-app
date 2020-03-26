import { Routes, Router } from '@angular/router';
import { CustomValidators } from 'src/app/shared/custom-validators';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserType } from 'src/app/models/user-type.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css',
    '../login-header/login-header.component.css'
  ]
})
export class RegisterComponent implements OnInit {
  userRegisterationForm: FormGroup;
  submitted = false;
  error = '';
  isLoading = false;
  curentUser: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userRegisterationForm = new FormGroup(
      {
        username: new FormControl(
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\\.]{4,12}$')
          ],
          CustomValidators.usernameValidator(this.userService)
        ),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,}$'
          ),
          Validators.minLength(6)
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,}$'
          )
        ])
      },
      { validators: CustomValidators.matchPassword }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.userRegisterationForm.valid) {
      this.isLoading = true;
      this.submitted = false;
      let newUser = this.userRegisterationForm.value;
      delete newUser.confirmPassword;
      this.addUser(newUser);
    }
  }

  handleOutputMessage() {
    this.error = '';
    this.router.navigate(['/login']);
  }

  addUser(newUser: User) {
    newUser.userType = UserType.Admin;
    this.userService.addUser(newUser).subscribe(
      response => {
        this.error = 'Successfully created Admin with ID' + response;
        this.isLoading = false;
      },
      error => {
        this.error = error;
        this.isLoading = false;
      }
    );
  }
}
