import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-26 02:01:56
 * @modify date 2020-03-26 02:01:56
 * @desc Contains operations such as loin and logout
 */
import { take, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  logIn(user: User) {
    return this.http
      .get<User[]>(
        environment.employeeRepositoryUrl +
          environment.userTable +
          '?username=' +
          user.username
      )
      .pipe(
        take(1),
        map(response => {
          if (response.length === 0) {
            throw 'Invalid username';
          } else {
            const index = response.findIndex(
              emp => emp.username == user.username
            );
            if (response[index].password == user.password) {
              this.loggedInUser.next(response[index]);
              return true;
            } else throw 'Invalid Password';
          }
        })
      );
  }

  logOut() {
    this.loggedInUser.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }
}

// TODO handle errors using an interceptior
