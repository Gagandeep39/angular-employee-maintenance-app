/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-24 23:23:37
 * @modify date 2020-03-24 23:23:37
 */

import { GradeType } from './../../models/grade-type.model';
import { Employee } from './../../models/employee.model';
import { Department } from './../../models/department.model';
import { AdminService } from 'src/app/services/admin.service';
import { Gender } from './../../models/gender.model';
import { MaritalStatus } from './../../models/marital-status.model';
import { CustomValidators } from './custom-validators';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  departments : Department[] = [];
  managers : Employee[] = [];
  grades: GradeType[] = [];

  employeeForm: FormGroup;
  selectedGrade: GradeType;

  constructor(private service: AdminService) { }

  ngOnInit() {
    this.selectedGrade = new GradeType();
    this.employeeForm = new FormGroup({
      empFirstName: new FormControl('', Validators.required),
      empLastName: new FormControl('', Validators.required),
      empDateOfBirth: new FormControl('', [Validators.required, CustomValidators.forbiddenAge]),
      empDateOfJoining: new FormControl('', [Validators.required, CustomValidators.forbidFutureDate]),
      empMaritalStatus: new FormControl('', Validators.required),
      empGender: new FormControl('', Validators.required),
      empDepartmentId: new FormControl('', Validators.required),
      empManagerId: new FormControl('', Validators.required),
      empGrade: new FormControl('', Validators.required),
      empBasic: new FormControl('',[ Validators.required, (control: FormControl)=> CustomValidators.forbiddenSalary(this.selectedGrade)(control)])
    });
    this.service.departmentEmitter.subscribe(response => this.departments = response)
    this.service.gradeEmitter.subscribe(response => this.grades = response);
    this.service.employeeListChanged.subscribe(response => response ? this.managers = this.service.getManagerList() : null);
  }

  submitForm() {
    this.submitted = true;
    console.log(this.employeeForm.value);
    console.log(this.employeeForm);
  }

  gradeIsSelected(event) {
    this.selectedGrade = this.grades.find(g=> g.grade === event.target.value)
  }

}
/**  `
 * The parameters of Validators are static
 * It cant be changed in  astandard way
 * Wehenver data changes, validation is invoked
 * When we create an arrow function, arrow fn is invoked when data changes
 * Arrow function creates a new Validator every it is invoked and takes latest parameter value
 */
