import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';

@Component({
  selector: 'app-through-service',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './through-service.component.html',
  styleUrl: './through-service.component.css',
})
export class ThroughServiceComponent {
  departmentList: any[] = [];
  constructor(
    private http: HttpClient,
    private deptService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.getDepartmentList();
  }

  getDepartmentList(): void {
    this.deptService.getAllDepartments().subscribe((result: any) => {
      this.departmentList = result.data;
    });
  }

  departmentObj = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };

  onSave(): void {
    this.deptService.addNewDepartment(this.departmentObj).subscribe(
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
    this.deptService
      .updateDepartment(this.departmentObj)
      .subscribe((response: any) => {
        response.result ? this.getDepartmentList() : alert(response.message);
      });
    this.onReset();
  }

  onDelete(departmentId: number): void {
    const isDelete = confirm('Are you sure want to delete?');
    if (isDelete) {
      this.deptService
        .deleteDepartment(departmentId)
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
