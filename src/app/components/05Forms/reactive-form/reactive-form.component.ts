import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
    studentForm: FormGroup = new FormGroup({
      firstName : new FormControl('',[Validators.required, Validators.minLength(4)]),
      lastName : new FormControl(''),
      userName : new FormControl("Some@123",[Validators.email]),
      city : new FormControl(''),
      state : new FormControl(''),
      pincode : new FormControl(''),
      isAcceptTerms : new FormControl('')
    });

    formValue: any;

    onSave():void{
      this.formValue = this.studentForm.value;
    }
    onReset():void{}
}
