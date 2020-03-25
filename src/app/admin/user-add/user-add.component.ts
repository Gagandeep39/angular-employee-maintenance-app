import { take } from 'rxjs/operators';
import { User } from './../../models/user.model';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-25 11:56:57
 * @modify date 2020-03-25 13:35:13
 * @desc Add user component to create a new user
 */

import { UserType } from './../../models/user-type.model';
import { CustomValidators } from './../employee-add/custom-validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  // Form object to access form values
  userRegisterationForm: FormGroup;
  // Boolean value to know whether form is submitted
  submitted = false;
  userTypes = UserType;
  buttonStyle = UserType.Admin;
  isLoading = false;
  error = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  ngOnInit() {
    console.log(this.route);

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
        ]),
        userType: new FormControl('', Validators.required)
      },
      { validators: CustomValidators.matchPassword }
    );
  }

  /**
   * Executed when a form is submitted
   */
  onSubmit() {
    this.submitted = true;
    if (this.userRegisterationForm.valid) {
      this.isLoading = true;
      this.submitted = false;
      const newUser = this.userRegisterationForm.value;
      delete newUser.confirmPassword;
      if (this.buttonStyle === UserType.Admin) {
        this.addUser(newUser);
      } else {
        this.userService.userEmitter.next(newUser);
        this.router.navigate(['../addemp'], { relativeTo: this.route });
      }
    }
  }

  typeIsSelected(event) {
    this.buttonStyle = event.target.value;
  }

  handleOutputMessage() {
    this.error = '';
    this.router.navigate(['../list'], { relativeTo: this.route });
  }

  addUser(newUser: User) {
    this.userService.addUser(newUser).subscribe(
      response => (this.error = 'Successfully created user with ID' + response),
      error => (this.error = error)
    );
  }
}
