import { GradeType } from './../models/grade-type.model';
import { Grade } from './../models/grade.model';
import { Department } from './../models/department.model';
import { environment } from './../../environments/environment.prod';
import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  employees: Employee[];

  employeeEmitter = new BehaviorSubject<Employee[]>(null);
  employeeErrorEmitter = new Subject<string>();
  employeeListChanged = new BehaviorSubject<boolean>(false);

  departmentEmitter = new BehaviorSubject<Department[]>(null);
  gradeEmitter = new BehaviorSubject<GradeType[]>(null);

  constructor(private http: HttpClient) {
    this.http.get<Employee[]>(environment.employeeRepositoryUrl + environment.employeeTable).subscribe(
      response => {
        this.employees = response;
        this.employeeEmitter.next(this.employees.slice());
        this.employeeListChanged.next(true);
        console.log(this.employees);
      },
      error => {
        console.log(error);
        this.employeeErrorEmitter.next(error.message);
      },
      () => {
        console.log('Fetched all employees successfully');
      }
    );

    this.http.get<Department[]>(environment.employeeRepositoryUrl + environment.departmentTable).subscribe(
      response => {
        this.departmentEmitter.next(response.slice());
      },
      error=>{
        // Create an emitter for error
      },
      ()=> {
        console.log('Fetched all departments successfully');

      }
    );

    this.http.get<GradeType[]>(environment.employeeRepositoryUrl + environment.gradeTable).subscribe(
      response => {
        this.gradeEmitter.next(response.slice());
      },
      (error) => {
        // Error
      },
      () => {
        console.log('Fetched all grades successfully');
      }
    )
  }

  // Get
  fetchEmployees() {
    return this.employees;
  }

  // Post
  addEmployee(employee: Employee) {
    this.http.post<Employee>(
      environment.employeeRepositoryUrl + environment.employeeTable + employee.id,
      employee
    );
  }

  // Put -
  updateEmployee(employee: Employee) {
    this.http.delete<Employee>(environment.employeeRepositoryUrl + environment.employeeTable + employee.id);
  }

  sortByName() {
    return this.employees.sort((a, b) => {
      return a.empFirstName > b.empFirstName ? 1 : -1;
    }).slice();
  }

  sortById() {
    return this.employees.sort((a, b) => {
      return a.id - b.id;
    }).slice();
  }

  // Uses Index for now
  fetchEmployeeById(id: number) {
    // Ensures ID and Employees both are not null
    if (id && this.employees) {
      return this.employees.slice()[id];
    }
    return null;
  }

  getManagerList() {
    return this.employees.filter(emp => emp.empDesignation === 'Manager').slice();
  }

}

/**
 *
 * TODO - Use ID enerated by server for adding user
 *
 */
