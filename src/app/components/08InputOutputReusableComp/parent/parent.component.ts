import { Component } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { MybuttonComponent } from '../../../reusableComponent/mybutton/mybutton.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [AlertComponent, MybuttonComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
