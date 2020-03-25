/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-25 21:39:33
 * @modify date 2020-03-25 21:39:33
 * @desc Admin Routes
 */
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { UserAddComponent } from './user-add/user-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {
    // path: '', // Lazy  Loading
    path: 'admin', // Raster loading
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
