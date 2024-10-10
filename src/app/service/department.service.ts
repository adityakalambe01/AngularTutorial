import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  url = {
    departmentList:
      'https://projectapi.gerasim.in/api/Complaint/GetParentDepartment',
    addNewDepartment:
      'https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
    updateDepartment:
      'https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',
    deleteDepartment:
      'https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=',
  };
  // http = inject(HttpClient);
  constructor(private http: HttpClient) {}

  getAllDepartments() {
    return this.http.get(this.url.departmentList);
  }

  addNewDepartment(newDeptObj:any){
    return this.http.post(this.url.addNewDepartment, newDeptObj);
  }

  updateDepartment(updateDept:any){
    return this.http.post(this.url.updateDepartment, updateDept);
  }

  deleteDepartment(deptId:number){
    return this.http.delete(this.url.deleteDepartment+deptId);
  }
}
