export interface EmployeeBook {
  employees: { [key: string]: Employee };
}

export class Employee {
  constructor(
    id: number,
    empFirstName: string,
    empLastName: string,
    empDateOfBirth: Date,
    empDateOfJoining: Date,
    empDepartmentId: number,
    empGrade: Grade,
    empDesignation: Designation,
    empBasic: number,
    empGender: Gender,
    empMaritalStatus: MaritalStatus,
    empHomeAddress: string,
    empContactNumber: string,
    empManagerId: number
  ) {}
}

export enum Designation {
  Assistant = 'Assistant',
  DataScientist = 'Data Scientist',
  Developer = 'Developer',
  Manager = 'Manager',
  Tester = 'Tester',
  Trainee = 'Trainee'
}

export enum Gender {
  Female = 'Female',
  Male = 'Male'
}

export enum Grade {
  M1 = 'M1',
  M2 = 'M2',
  M3 = 'M3',
  M4 = 'M4',
  M5 = 'M5',
  M6 = 'M6',
  M7 = 'M7'
}

export enum MaritalStatus {
  Divorced = 'Divorced',
  Married = 'Married',
  Separated = 'Separated',
  Single = 'Single',
  Widowed = 'Widowed'
}

// Converts JSON strings to/from your types
export class Convert {
  public static toEmployeeBook(json: string): EmployeeBook {
    return JSON.parse(json);
  }

  public static employeeBookToJson(value: EmployeeBook): string {
    return JSON.stringify(value);
  }

  public static toEmployee(json: string): Employee {
    return JSON.parse(json);
  }

  public static employeeToJson(value: Employee): string {
    return JSON.stringify(value);
  }
}
