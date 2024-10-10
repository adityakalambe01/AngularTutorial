import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css',
})
export class PutApiComponent implements OnInit {
  url = {
    departmentList:
      'https://projectapi.gerasim.in/api/Complaint/GetParentDepartment',
    addNewDepartment:
      'https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
    updateDepartment:
      'https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',
  };

  departmentList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDepartmentList();
  }

  getDepartmentList(): void {
    this.http.get(this.url.departmentList).subscribe((result: any) => {
      this.departmentList = result.data;
    });
  }

  departmentObj = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };

  onSave(): void {
    this.http.post(this.url.addNewDepartment, this.departmentObj).subscribe(
      (response: any) => {
        if (response.result) this.getDepartmentList();
        else alert(response.message);
      },
      (error) => {}
    );
  }
  onEdit(data: any): void {
    this.departmentObj = data;
  }

  onUpdate(): void {
    this.http
      .post(this.url.updateDepartment, this.departmentObj)
      .subscribe((response: any) => {
        response.result ? this.getDepartmentList() : alert(response.message);
      });
      this.departmentObj = {
        departmentId: 0,
        departmentName: '',
        departmentLogo: '',
      };
  }
}
