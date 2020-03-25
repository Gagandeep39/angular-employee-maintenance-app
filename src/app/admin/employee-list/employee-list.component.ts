import { Employee } from './../../models/employee.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Subscription, Observable } from 'rxjs';

/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-25 19:24:35
 * @modify date 2020-03-25 19:24:35
 * @desc Displays a list of employees
 */

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees: Employee[] = [];
  error: string;
  employeeSubscription: Subscription;
  errorSubscription: Subscription;
  isLoading = false;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.errorSubscription = this.adminService.employeeErrorEmitter.subscribe(
      response => {
        this.error = response;
        this.isLoading = false;
      }
    );
    this.employeeSubscription = this.adminService.employeeListChanged.subscribe(
      response => {
        this.employees = this.adminService.fetchEmployees();
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy() {
    this.employeeSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
  }

  sortByName() {
    if (this.employees) this.employees = this.adminService.sortByName();
  }

  sortById() {
    if (this.employees) this.employees = this.adminService.sortById();
  }

  handleError(event: string) {
    if (event === 'close') {
      this.error = '';
    }
  }
}
