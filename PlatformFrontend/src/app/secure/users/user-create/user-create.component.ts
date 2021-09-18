import { RoleService } from './../../../services/role.service';
import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';
import { Role } from './../../../interfaces/role';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
      login_name:'',
      birth_date: '',
      date_of_joining:'',
      first_name:'',
      last_name:'',
      email:'',
      phone:'',
      marital_status:''
    });

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.userService.create(this.str).subscribe(
      () => this.router.navigate(['/users'])
    );
  }

}
