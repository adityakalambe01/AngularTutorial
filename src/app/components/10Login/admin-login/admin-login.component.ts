import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  userObject: any = {
    username: '',
    password: '',
  };

  router = inject(Router);
  onLogin(): void {
    if (
      this.userObject.username === 'admin' &&
      this.userObject.password === 'admin'
    ) {
      localStorage.setItem('loginUser', this.userObject.username);
      this.router.navigateByUrl('atb-dir');
    } else {
      alert('Wrong Credentials');
    }
  }


}
