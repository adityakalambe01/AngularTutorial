import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template-directive.component.html',
  styleUrl: './ng-template-directive.component.css',
})
export class NgTemplateDirectiveComponent {
  loggedInUserName: string = 'Aditya';
  isUserLoggedIn: boolean = false;

  @ViewChild('dynamicTemplate') dynamicTemplate: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer',{read: ViewContainerRef}) dynamicContainer:TemplateRef<any> | undefined;
  loadContent() {
    this.dynamicContainer?.createEmbeddedView(this.dynamicTemplate);
  }
}
