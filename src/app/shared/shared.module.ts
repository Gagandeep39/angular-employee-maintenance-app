/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-25 21:42:03
 * @modify date 2020-03-25 21:42:03
 * @desc Contains functionalities shared between modules
 */
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ManagerInfoPipe } from './manager-info.pipe';
import { FullNamePipe } from './full-name.pipe';
import { CalAgePipe } from './cal-age.pipe';
import { GradeTypePipe } from './grade-type.pipe';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    AlertComponent,
    ManagerInfoPipe,
    FullNamePipe,
    CalAgePipe,
    LoadingSpinnerComponent,
    GradeTypePipe,
  ],
  exports: [
    AlertComponent,
    ManagerInfoPipe,
    FullNamePipe,
    CalAgePipe,
    LoadingSpinnerComponent,
    GradeTypePipe,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SharedModule { }
