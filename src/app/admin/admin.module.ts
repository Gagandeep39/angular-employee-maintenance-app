import { ReactiveFormsModule } from '@angular/forms';
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-25 21:33:35
 * @modify date 2020-03-25 21:33:35
 * @desc Admin Module is a feature module with employee operations
 */


import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    EmployeeAddComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UserAddComponent,
  ]
})
export class AdminModule { }
