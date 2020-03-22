import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import { Routes, RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { EmployeeAddComponent } from './admin/employee-add/employee-add.component';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'list', component: EmployeeListComponent },
      { path: 'add', component: EmployeeAddComponent },
      { path: ':id/update', component: EmployeeAddComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHeaderComponent,
    EmployeeAddComponent,
    EmployeeListComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
