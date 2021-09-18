import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./../public.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http:HttpClient,
    private authService:AuthService
  ) {
  }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   name: '',
    //   password: ''
    // });
  }

  // register():void{
  //   window.location.href = 'https://appclients.auth.ap-south-1.amazoncognito.com/signup?client_id=3dkqvsv6a35n0mmechsetgcg1g&response_type=code&scope=email+openid&redirect_uri=http://localhost:4200/login'
  // }

  submit(): void {

    window.location.assign(environment.loginURL)
  }
}