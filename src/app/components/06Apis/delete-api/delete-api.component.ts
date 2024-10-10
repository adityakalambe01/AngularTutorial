import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-api.component.html',
  styleUrl: './delete-api.component.css',
})
export class DeleteApiComponent {
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
    this.onReset();
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
    this.onReset();
  }

  onDelete(departmentId: number): void {
    const isDelete = confirm('Are you sure want to delete?');
    if (isDelete) {
      this.http
        .delete(this.url.deleteDepartment + departmentId)
        .subscribe((response: any) => {
          response.result ? this.getDepartmentList() : alert(response.message);
        });
    }
  }

  onReset(): void {
    this.departmentObj = {
      departmentId: 0,
      departmentName: '',
      departmentLogo: '',
    };
  }
}
