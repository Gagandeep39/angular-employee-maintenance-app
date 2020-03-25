/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-25 21:17:48
 * @modify date 2020-03-25 21:17:48
 * @desc Root application
 */


import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Custom Modules
    AppRoutingModule,
    // To Enable Eager loading
    // 1. UnComment below Modules
    // 2. Comment the paths in pp-routing
    // 3. Set the path as 'admin' in admin-routing.module instead of ''
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
