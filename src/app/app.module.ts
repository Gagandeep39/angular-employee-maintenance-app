import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import { Routes, RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { EmployeeAddComponent } from './admin/employee-add/employee-add.component';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailsComponent } from './admin/employee-details/employee-details.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' }
      { path: 'list', component: EmployeeListComponent },
      { path: 'add', component: EmployeeAddComponent },
      { path: ':id/update', component: EmployeeAddComponent },
      { path: 'list/:id/details', component: EmployeeAddComponent },
      { path: '**', redirectTo: 'list' }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHeaderComponent,
    EmployeeAddComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
