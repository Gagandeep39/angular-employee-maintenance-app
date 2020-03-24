import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calAge'
})
export class CalAgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const dob = new Date(value);
    const currDate = new Date();
    return (currDate.getFullYear() - dob.getFullYear());
  }

}
