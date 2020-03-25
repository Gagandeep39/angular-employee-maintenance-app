import { Address } from './address.model';
import { MaritalStatus } from './marital-status.model';
import { Grade } from './grade.model';
import { Designation } from './designation.model';
import { Gender } from './gender.model';

export interface EmployeeList {
  [key: string]: Employee[];
}

export class Employee {
  constructor(
    public id: number,
    public empFirstName: string,
    public empLastName: string,
    public empDateOfBirth: Date,
    public empDateOfJoining: Date,
    public empDepartmentId: number,
    public empGrade: Grade,
    public empDesignation: Designation,
    public empBasic: number,
    public empGender: Gender,
    public empMaritalStatus: MaritalStatus,
    public empHomeAddress: Address,
    public empContactNumber: string,
    public empManagerId: number
  ) {}
}





// Converts JSON strings to/from your types
export class Convert {
  public static toEmployeeList(json: string): EmployeeList {
    return JSON.parse(json);
  }

  public static employeeListToJson(value: EmployeeList): string {
    return JSON.stringify(value);
  }

  public static toEmployee(json: string): Employee {
    return JSON.parse(json);
  }

  public static employeeToJson(value: Employee): string {
    return JSON.stringify(value);
  }
}

/**
 * TODO - Improve the Object structure
 */
