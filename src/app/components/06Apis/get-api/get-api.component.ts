import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  // http = inject(HttpClient)
  userList: any[] = [];

  constructor(private http: HttpClient) {}

  getAllUsers(): void {
    // debugger;
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        // debugger;
        this.userList = res;
      });
  }

  customerList: any[] = [];
  getAllCustomer(): void {
    this.http
      .get('https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers')
      .subscribe((response: any) => {
        this.customerList = response.data;
      }, error=>{
        console.log("error");
      });
  }
}
