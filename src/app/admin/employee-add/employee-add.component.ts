import { Gender } from './../../models/Gender.model';
import { MaritalStatus } from './../../models/marital-status.model';
import { CustomValidators } from './custom-validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  submitted = false;
  editMode = false;
  maritalStatus = MaritalStatus;
  genders = Gender;

  employeeForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.employeeForm = new FormGroup({
      empFirstName: new FormControl('', Validators.required),
      empLastName: new FormControl('', Validators.required),
      empDateOfBirth: new FormControl('', [Validators.required, CustomValidators.forbiddenAge]),
      empDateOfJoining: new FormControl('', [Validators.required, CustomValidators.forbidFutureDate]),
      empMaritalStatus: new FormControl('', Validators.required),
      empGender: new FormControl('', Validators.required)
    });
  }

  submitForm() {
    this.submitted = true;
    console.log(this.employeeForm.value);
    console.log(this.employeeForm);


  }

}
