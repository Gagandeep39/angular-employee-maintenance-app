import { Employee } from './../../models/employee.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Subscription, Observable } from 'rxjs';
import { serializePath } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees: Employee[] = [];
  error: string;
  employeeSubscription: Subscription;
  errorSubscription: Subscription

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.employeeSubscription = this.adminService.employeeErrorEmitter.subscribe(response => this.error = response);
    this.errorSubscription = this.adminService.employeeListChanged.subscribe(response => {
      this.employees = this.adminService.fetchEmployees();
    });
  }

  ngOnDestroy() {
    this.employeeSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
  }

  sortByName() {
    if(this.employees) this.employees = this.adminService.sortByName();
  }

  sortById() {
    if(this.employees) this.employees = this.adminService.sortById();
  }

  handleError(event: string) {
    if (event === 'close') {
      this.error = '';
    }
  }

}
