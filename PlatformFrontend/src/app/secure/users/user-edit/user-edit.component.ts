
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { RoleService } from './../../../services/role.service';
import { Role } from './../../../interfaces/role';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

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
      phone: 0,
      marital_status:''
    });

    this.id = parseInt(this.route.snapshot.params.id)

    this.userService.get(this.id).subscribe(
      user => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
          login_name:user.login_name,
      birth_date: user.birth_date,
      date_of_joining: user.date_of_joining,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      marital_status: user.marital_status
        });
      }
    );

   
         
       


  }
  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.str.DataCollection[0].Id = this.id
    console.log(this.str)
    this.userService.update(this.id, this.str)
      .subscribe(() => this.router.navigate(['/users']));
  }

}
