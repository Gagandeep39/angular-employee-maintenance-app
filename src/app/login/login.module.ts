import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from './../shared/shared.module';
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-26 01:11:46
 * @modify date 2020-03-26 01:11:46
 * @desc Starting point of Login MOdule, contains all login related components
 */
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
    RouterModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
