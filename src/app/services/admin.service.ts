import { map } from 'rxjs/operators';
import { exhaustMap } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { User } from './../models/user.model';
import { GradeType } from './../models/grade-type.model';
import { Department } from './../models/department.model';
import { environment } from './../../environments/environment.prod';
import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-25 15:35:42
 * @modify date 2020-03-25 19:23:00
 * @desc Performs ogical operation for the admin
 */

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

  constructor(private http: HttpClient, private userService: UserService) {
    this.fetchFromServer();
  }

  // Get
  fetchEmployees() {
    return this.employees;
  }

  // Post
  addEmployee(user: User, employee: Employee) {
    return this.userService
      .addUser(user)
      .pipe(
        take(1),
        exhaustMap(response => {
          employee.id = +response;
          return this.http.post<Employee>(
            environment.employeeRepositoryUrl + environment.employeeTable,
            employee
          );
        })
      )
      .pipe(map(response => response.id));
  }

  // Put -
  updateEmployee(employee: Employee) {
    this.http.delete<Employee>(
      environment.employeeRepositoryUrl +
        environment.employeeTable +
        employee.id
    );
  }

  sortByName() {
    return this.employees
      .sort((a, b) => {
        return a.empFirstName > b.empFirstName ? 1 : -1;
      })
      .slice();
  }

  sortById() {
    return this.employees
      .sort((a, b) => {
        return a.id - b.id;
      })
      .slice();
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
    return this.employees
      .filter(emp => emp.empDesignation === 'Manager')
      .slice();
  }

  fetchFromServer() {
    this.http
      .get<Employee[]>(
        environment.employeeRepositoryUrl + environment.employeeTable
      )
      .subscribe(
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

    this.http
      .get<Department[]>(
        environment.employeeRepositoryUrl + environment.departmentTable
      )
      .subscribe(
        response => {
          this.departmentEmitter.next(response.slice());
        },
        error => {
          // Create an emitter for error
        },
        () => {
          console.log('Fetched all departments successfully');
        }
      );

    this.http
      .get<GradeType[]>(
        environment.employeeRepositoryUrl + environment.gradeTable
      )
      .subscribe(
        response => {
          this.gradeEmitter.next(response.slice());
        },
        error => {
          // Error
        },
        () => {
          console.log('Fetched all grades successfully');
        }
      );
  }
}

/**
 *
 * TODO - Use ID enerated by server for adding user
 *
 */
