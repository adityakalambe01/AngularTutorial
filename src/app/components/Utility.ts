export class Lists {
  static Student: any[] = [
    {
      studId: 12,
      totalMarks: 23,
      gender: 'male',
      name: 'AAA',
      city: 'Pune',
      isActive: false,
    },
    {
      studId: 22,
      totalMarks: 33,
      gender: 'female',
      name: 'BBB',
      city: 'Mumbai',
      isActive: false,
    },
    {
      studId: 32,
      totalMarks: 67,
      gender: 'male',
      name: 'CC',
      city: 'Jalgao',
      isActive: true,
    },
    {
      studId: 56,
      totalMarks: 98,
      gender: 'female',
      name: 'DD',
      city: 'Mumbai',
      isActive: false,
    },
    {
      studId: 34,
      totalMarks: 20,
      gender: 'male',
      name: 'EE',
      city: 'Nagpur',
      isActive: false,
    },
    {
      studId: 76,
      totalMarks: 50,
      gender: 'male',
      name: 'FFF',
      city: 'Thane',
      isActive: true,
    },
  ];

  static city: string[] = ['Amravati', 'Pune', 'Delhi', 'Mumbai', 'Thane'];
  static states: string[] = ["Maharashtra", "Goa", "Delhi", "Asaam", "MP", "UP"];
}

export interface Student{
  firstName:string;
  lastName:string;
  username:string;
  city:string;
  state:string;
  pincode:string|number;
}
