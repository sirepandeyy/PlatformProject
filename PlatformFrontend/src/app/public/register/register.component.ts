import { AuthService } from './../../services/auth.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','./../public.component.css']
})
export class RegisterComponent implements OnInit {

  
  form: FormGroup;
  
  constructor(private http:HttpClient,
    private formBuilder: FormBuilder
    ,private router:Router,
    private authService:AuthService
    ) {
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      email:'',
      password: ''
    });
  }

  submit(): void {
    this.authService.register(this.form.getRawValue()).subscribe(() => this.router.navigate(['/login']));
  }

}
