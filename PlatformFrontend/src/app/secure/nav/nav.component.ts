import { Router } from '@angular/router';
import { Auth } from './../../classes/auth';
import { User } from './../../interfaces/user';
import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user?:User
  data:any

  constructor(private authService:AuthService , private router:Router) { }

  ngOnInit(): void {
      this.data = sessionStorage.getItem('email')
      console.log(this.data)
  }

  logout():void{
    window.location.assign(environment.logout);   
    sessionStorage.removeItem('token') 
    sessionStorage.removeItem('email') 
  }

}
