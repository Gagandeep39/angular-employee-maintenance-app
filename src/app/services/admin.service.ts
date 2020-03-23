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

  constructor(private http: HttpClient) {
    this.http
      .get<Employee[]>(environment.employeeRepositoryUrl)
      .subscribe(
        response => {
          this.employees = response;
          this.employeeEmitter.next(this.employees);
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
  }

  // Get
  fetchEmployees() {
    return this.employees;
  }

  // Post
  addEmployee(employee: Employee) {
    this.http.post<Employee>(
      environment.employeeRepositoryUrl + employee.id,
      employee
    );
  }

  // Put -
  updateEmployee(employee: Employee) {
    this.http.delete<Employee>(environment.employeeRepositoryUrl + employee.id);
  }

  sortByName() {
    this.employees.sort((a, b) => {
      return a.empFirstName > b.empFirstName ? 1 : -1;
    });
    this.employeeEmitter.next(this.employees);
  }

  sortById() {
    this.employees.sort((a, b) => {
      return a.id - b.id;
    });
    this.employeeEmitter.next(this.employees);
  }
}

/**
 *
 * TODO - Use ID enerated by server for adding user
 *
 */
