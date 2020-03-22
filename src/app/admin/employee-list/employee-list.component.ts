import { Employee } from './../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.employeeEmitter.subscribe(data => {
      this.employees = data;
    });
  }

  sortByName() {
    this.adminService.sortByName();
  }
}
