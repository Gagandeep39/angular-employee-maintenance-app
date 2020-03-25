import { GradeType } from './../models/grade-type.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradeType'
})
export class GradeTypePipe implements PipeTransform {

  transform(value: GradeType, args?: any): any {
    return value.grade + ' (₹' + value.minSalary + ' - ₹' + value.maxSalary + ')';
  }

}
