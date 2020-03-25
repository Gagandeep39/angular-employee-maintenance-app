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
  ]
})
export class SharedModule { }
