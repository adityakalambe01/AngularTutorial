import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent implements OnInit {
  url = {
    departmentList:
      'https://projectapi.gerasim.in/api/Complaint/GetParentDepartment',
    addNewDepartment:
      'https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
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
        else alert('Something went wrong');
      },
      (error) => {}
    );
  }
  onUpdate(): void {}
}
