import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import { Routes, RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';

const routes: Routes = [{ path: 'admin', component: AdminComponent }];

@NgModule({
  declarations: [AppComponent, AdminComponent, AdminHeaderComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
