import { UserService } from 'src/app/services/user.service';
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-24 22:10:38
 * @modify date 2020-03-25 13:34:53
 */

import {
  FormControl,
  ValidatorFn,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { GradeType } from '../models/grade-type.model';

export class CustomValidators {
  static forbiddenAge(control: FormControl) {
    const dob = new Date(control.value);
    const today = new Date();
    const diff = today.getFullYear() - dob.getFullYear();

    if (diff < 18 || diff > 58) return { ageIsForbidden: true };
    return null;
  }

  static forbidFutureDate(control: FormControl) {
    const dob = new Date(control.value);
    if (dob > new Date()) return { futureDateForbidden: true };
    return null;
  }

  static forbiddenSalary(grade: GradeType): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {
      const currentSal = +control.value;
      if (currentSal < grade.minSalary || currentSal > grade.maxSalary) {
        return { salaryIsForbidden: true };
      }
      return null;
    };
  }

  static matchPassword(control: FormControl) {
    let password = control.get('password').value;
    let confirmPassword = control.get('confirmPassword').value;
    if (password != confirmPassword) {
      control.get('confirmPassword').setErrors({ passwordMatchError: true });
    } else {
      return null;
    }
  }

  static usernameValidator(service: UserService) {
    return (control: FormControl)=> {
      return service.checkUser(control.value)
      .pipe(map(response => response ? null : { usernameTaken: true }
      ))
    };
  }
}
