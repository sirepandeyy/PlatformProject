import { Router } from '@angular/router';
import { AppRolesService } from './../../../services/app-roles.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-roles-create',
  templateUrl: './app-roles-create.component.html',
  styleUrls: ['./app-roles-create.component.css']
})
export class AppRolesCreateComponent implements OnInit {
  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private appService: AppRolesService,
    private router: Router) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
       role_id:'',
       app_id:'',
       app_role_permissions: ''
    });

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.appService.create(this.str).subscribe(
      () => this.router.navigate(['/appRoles'])
    );
  }

}
