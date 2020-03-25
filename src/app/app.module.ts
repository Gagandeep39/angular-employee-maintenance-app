import { AppRoutingModule } from './app-routing.module';
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
import { CalAgePipe } from './shared/cal-age.pipe';
import { GradeTypePipe } from './shared/grade-type.pipe';
import { UserAddComponent } from './admin/user-add/user-add.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';



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
    FullNamePipe,
    CalAgePipe,
    GradeTypePipe,
    UserAddComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
