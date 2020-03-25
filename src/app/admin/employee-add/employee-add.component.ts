@modify date 2020-03-25 19:25:45

import { User } from './../../models/user.model';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

import { GradeType } from './../../models/grade-type.model';
import { Employee } from './../../models/employee.model';
import { Department } from './../../models/department.model';
import { AdminService } from 'src/app/services/admin.service';
import { Gender } from './../../models/gender.model';
import { MaritalStatus } from './../../models/marital-status.model';
import { CustomValidators } from './custom-validators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-24 23:23:37
 * @modify date 2020-03-24 23:23:37
 */

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
  departments: Department[] = [];
  managers: Employee[] = [];
  grades: GradeType[] = [];
  designations = Designation;

  employeeForm: FormGroup;
  selectedGrade: GradeType;

  isLoading = false;
  currentUser: User;
  error = '';

  constructor(
    private service: AdminService,
    private userService: UserService,
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userService.userEmitter.pipe(take(1)).subscribe((response: User) => {
      console.log(response);
      this.currentUser = response;
      if(response==undefined ||response===null ){ this.redirectToHomePage();}
    });

    this.selectedGrade = new GradeType();
    this.employeeForm = new FormGroup({
      empFirstName: new FormControl('', Validators.required),
      empLastName: new FormControl('', Validators.required),
      empDateOfBirth: new FormControl('', [
        Validators.required,
        CustomValidators.forbiddenAge
      ]),
      empDateOfJoining: new FormControl('', [
        Validators.required,
        CustomValidators.forbidFutureDate
      ]),
      empMaritalStatus: new FormControl('', Validators.required),
      empGender: new FormControl('', Validators.required),
      empDepartmentId: new FormControl('', Validators.required),
      empManagerId: new FormControl('', Validators.required),
      empGrade: new FormControl('', Validators.required),
      empDesignation: new FormControl('', Validators.required),
      empBasic: new FormControl('', [
        Validators.required,
        (control: FormControl) =>
          CustomValidators.forbiddenSalary(this.selectedGrade)(control)
      ]),
      empContactNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[7-9][0-9]{9}')
      ]),
      empEmailId: new FormControl('', [Validators.required, Validators.email]),
      empHomeAddress: new FormGroup({
        street: new FormControl('', Validators.required),
        landmark: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        pincode: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{6}')
        ])
      })
    });
    this.service.departmentEmitter.subscribe(
      response => (this.departments = response)
    );
    this.service.gradeEmitter.subscribe(response => (this.grades = response));
    this.service.employeeListChanged.subscribe(response =>
      response ? (this.managers = this.service.getManagerList()) : null
    );
  }

  submitForm() {
    this.submitted = true;
    if (this.employeeForm.valid) {
      this.isLoading = true;
      this.saveDataToServer(this.employeeForm.value);
    }
  }

  gradeIsSelected(event) {
    this.selectedGrade = this.grades.find(g => g.grade === event.target.value);
  }

  saveDataToServer(newEmployee: Employee) {
    this.adminService.addEmployee(this.currentUser, newEmployee).subscribe(
      response => {
        console.log(response);
        this.isLoading = false;
        this.error = 'Successfully Created employee with ID: ' +  response;
        this.redirectToHomePage();
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.error = error;
      }
    );
  }

  redirectToHomePage() {
    this.router.navigate(['../list'], {relativeTo: this.route})
  }

  handleOutputMessage() {
    this.error = '';
  }
}
/**  `
 * The parameters of Validators are static
 * It cant be changed in  astandard way
 * Wehenver data changes, validation is invoked
 * When we create an arrow function, arrow fn is invoked when data changes
 * Arrow function creates a new Validator every it is invoked and takes latest parameter value
 */
