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
    public empHomeAddress: string,
    public empContactNumber: string,
    public empManagerId: number
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
