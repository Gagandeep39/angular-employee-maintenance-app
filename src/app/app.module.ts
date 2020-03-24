import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { EmployeeAddComponent } from './admin/employee-add/employee-add.component';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailsComponent } from './admin/employee-details/employee-details.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ManagerInfoPipe } from './shared/manager-info.pipe';
import { FullNamePipe } from './shared/full-name.pipe';

const routes: Routes = [
  // Below patch is a place holder until other features are not implemented
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: EmployeeListComponent },
      { path: 'add', component: EmployeeAddComponent },
      { path: ':id/update', component: EmployeeAddComponent },
      { path: 'list/:id/details', component: EmployeeDetailsComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHeaderComponent,
    EmployeeAddComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    AlertComponent,
    ManagerInfoPipe,
    FullNamePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
