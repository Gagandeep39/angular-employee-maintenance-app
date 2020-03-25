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
import { relative } from 'path';

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

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    console.log(this.route);

    this.userRegisterationForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern('')
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.pattern('')
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
      this.submitted = false;
      if(this.buttonStyle === UserType.Admin) { this.router.navigate(['../list'], {relativeTo: this.route})}
      else {this.router.navigate(['../addemp', {relativeTo: this.route}])}
    }
  }

  typeIsSelected(event) {
    this.buttonStyle = event.target.value;
  }
}
