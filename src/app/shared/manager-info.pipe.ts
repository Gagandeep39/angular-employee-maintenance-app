import { Employee } from '../models/employee.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'managerInfo'
})
export class ManagerInfoPipe implements PipeTransform {

  transform(value: Employee, args?: any): any {

    return value.id + ' - ' + value.empFirstName + ' ' + value.empLastName;
  }

}
