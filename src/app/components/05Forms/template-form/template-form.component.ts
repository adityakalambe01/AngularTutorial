import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lists, Student } from '../../Utility';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  allStates: string[] = Lists.states;

  studentObject: Student | any = {
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    pincode: '',
    isAcceptTerms: false,
  };

  formValue: any;

  onSubmit(): void {
    this.formValue = this.studentObject;
  }

  resetForm():void{
    this.formValue = {
      firstName: '',
      lastName: '',
      username: '',
      city: '',
      state: '',
      pincode: '',
      isAcceptTerms: false,
    };
  }
}
