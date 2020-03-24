import { Employee } from './../../models/employee.model';
import { Department } from './../../models/department.model';
import { AdminService } from 'src/app/services/admin.service';
import { Gender } from './../../models/gender.model';
import { MaritalStatus } from './../../models/marital-status.model';
import { CustomValidators } from './custom-validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { s } from '@angular/core/src/render3';

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
  departments : Department[] = [];
  managers : Employee[] = [];

  employeeForm: FormGroup;

  constructor(private service: AdminService) { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      empFirstName: new FormControl('', Validators.required),
      empLastName: new FormControl('', Validators.required),
      empDateOfBirth: new FormControl('', [Validators.required, CustomValidators.forbiddenAge]),
      empDateOfJoining: new FormControl('', [Validators.required, CustomValidators.forbidFutureDate]),
      empMaritalStatus: new FormControl('', Validators.required),
      empGender: new FormControl('', Validators.required),
      empDepartmentId: new FormControl('', Validators.required),
      empManagerId: new FormControl('', Validators.required)
    });

    this.service.departmentEmitter.subscribe(response => this.departments = response)
    this.service.employeeListChanged.subscribe(response => response ? this.managers = this.service.getManagerList() : null);
  }

  submitForm() {
    this.submitted = true;
    console.log(this.employeeForm.value);
    console.log(this.employeeForm);
  }



}
