import { Component } from '@angular/core';
import { Lists } from '../../Utility';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-for-swithch',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './for-swithch.component.html',
  styleUrl: './for-swithch.component.css',
})
export class ForSwithchComponent {
  studentArray: any[] = Lists.Student;
  cityArray:any[] = Lists.city;

  dayNumber:string = '';
}
