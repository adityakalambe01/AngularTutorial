import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-if-ifelse-elseif',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-ifelse-elseif.component.html',
  styleUrl: './if-ifelse-elseif.component.css',
})
export class IfIfelseElseifComponent {
  isDivVisible: boolean = false;

  showDiv1(): void {
    this.isDivVisible = true;
  }

  hideDiv1(): void {
    this.isDivVisible = false;
  }

  isDiv2Visible: boolean = false;

  toggle(): void {
    this.isDiv2Visible = !this.isDiv2Visible;
  }

  num1: string = '';
  num2: string = '';

  selectedStatus: string = '';


  // router redirect from ts to another component
  constructor(private router:Router){

  }
  redirectToForSwitchControlFlow(){
      this.router.navigateByUrl('for-swithch');
  }
}
