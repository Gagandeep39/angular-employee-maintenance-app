import { Employee } from './../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  error: string;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.employeeEmitter.subscribe(data => {
      this.employees = data;
    });
    this.adminService.employeeErrorEmitter.subscribe(errorMessage => {
      this.error = errorMessage;
    });
  }

  sortByName() {
    this.adminService.sortByName();
  }

  handleError(event: string) {
    if (event === 'close') {
      this.error = '';
    }
  }
}
