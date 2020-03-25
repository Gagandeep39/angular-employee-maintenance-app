/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-25 12:03:38
 * @modify date 2020-03-25 12:03:38
 * @desc User class stores user credentials
 */

import { UserType } from './user-type.model';
export class User {
  id: number;
  username: string;
  password: string;
  userType: UserType;
}
