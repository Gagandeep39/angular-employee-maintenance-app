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
  departments: Department[];

  employeeEmitter = new BehaviorSubject<Employee[]>(null);
  employeeErrorEmitter = new Subject<string>();
  employeeListChanged = new BehaviorSubject<void>(null);

  departmentEmitter = new BehaviorSubject<Department[]>(null);

  constructor(private http: HttpClient) {
    this.http.get<Employee[]>(environment.employeeRepositoryUrl + environment.employeeTable).subscribe(
      response => {
        this.employees = response;
        this.employeeEmitter.next(this.employees.slice());
        this.employeeListChanged.next(null);
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
        this.departments = response;
        this.departmentEmitter.next(this.departments.slice());
      },
      error=>{
        // Create an emitter for error
      },
      ()=> {
        console.log('Fetched all departments successfully');

      }
    );
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
    this.employees.sort((a, b) => {
      return a.empFirstName > b.empFirstName ? 1 : -1;
    });
    this.employeeEmitter.next(this.employees.slice());
  }

  sortById() {
    this.employees.sort((a, b) => {
      return a.id - b.id;
    });
    this.employeeEmitter.next(this.employees.slice());
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
