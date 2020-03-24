import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

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
}
