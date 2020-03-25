/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-25 21:01:21
 * @modify date 2020-03-25 21:01:21
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserAddComponent } from './admin/user-add/user-add.component';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';
import { EmployeeAddComponent } from './admin/employee-add/employee-add.component';
import { EmployeeDetailsComponent } from './admin/employee-details/employee-details.component';


const routes: Routes = [
  // Below patch is a place holder until other features are not implemented
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'adduser', component: UserAddComponent },
      { path: 'list', component: EmployeeListComponent },
      { path: 'addemp', component: EmployeeAddComponent },
      { path: ':id/updateemp', component: EmployeeAddComponent },
      { path: 'list/:id/details', component: EmployeeDetailsComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
