import { Employee } from './../../models/employee.model';
import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  empId: number;
  constructor(private service: AdminService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.empId = this.route.snapshot.params['id'];
    this.service.employeeListChanged.subscribe(() => {
      this.employee = this.service.fetchEmployeeById(this.empId);
    })
  }
}
