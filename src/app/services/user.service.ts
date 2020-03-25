import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-25 15:51:44
 * @modify date 2020-03-25 19:22:05
 * @desc Used to message user related oerations
 */


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  userEmitter = new BehaviorSubject<User>(null);

  addUser(user: User) {
    return this.http
      .post(environment.employeeRepositoryUrl + environment.userTable, user)
      .pipe(map((response: User) => response.id));
  }

  checkUser(username: string) {
    // console.log(username);

    return this.http
      .get<User[]>(
        environment.employeeRepositoryUrl +
          environment.userTable +
          '?username=' +
          username
      )
      .pipe(map(response => (response.length == 0 ? true : false)));
  }
}
