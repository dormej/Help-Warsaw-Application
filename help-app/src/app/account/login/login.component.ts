import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 loginForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit(): void {
    const loginRequest = {
      email: this.loginForm.email.value,
      password: this.loginForm.password.value
    };

    this.apiService.login(loginRequest)
      .subscribe(() => this.router.navigate(['/']));
  }
}
