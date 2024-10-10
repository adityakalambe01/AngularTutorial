import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AttributeDirectiveComponent } from './components/02directives/attribute-directive/attribute-directive.component';
import { TemplateFormComponent } from "./components/05Forms/template-form/template-form.component";
import { ReactiveFormComponent } from './components/05Forms/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/06Apis/get-api/get-api.component';
import { PostApiComponent } from './components/06Apis/post-api/post-api.component';
import { PutApiComponent } from './components/06Apis/put-api/put-api.component';
import { DeleteApiComponent } from './components/06Apis/delete-api/delete-api.component';
import { ThroughServiceComponent } from './components/07Service/through-service/through-service.component';
import { ParentComponent } from './components/08InputOutputReusableComp/parent/parent.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, AttributeDirectiveComponent],

  //using routing
  // imports: [RouterOutlet, RouterLink],

  imports: [
    RouterOutlet,
    RouterLink,
    TemplateFormComponent,
    ReactiveFormComponent,
    GetApiComponent,
    PostApiComponent,
    PutApiComponent,
    DeleteApiComponent,
    ThroughServiceComponent,
    ParentComponent,

    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_complete_notes';
}
