import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { EmployeeAddComponent } from './admin/employee-add/employee-add.component';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailsComponent } from './admin/employee-details/employee-details.component';
import { UserAddComponent } from './admin/user-add/user-add.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHeaderComponent,
    EmployeeAddComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Custom Modules
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
