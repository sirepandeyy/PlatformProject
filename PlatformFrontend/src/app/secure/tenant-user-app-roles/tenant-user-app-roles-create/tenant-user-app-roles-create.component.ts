import { TenantUserAppRolesService } from './../../../services/tenant-user-app-roles.service';
import { Router } from '@angular/router';
import { TenantUserAppRoles } from './../../../interfaces/tenantUserAppRoles';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-user-app-roles-create',
  templateUrl: './tenant-user-app-roles-create.component.html',
  styleUrls: ['./tenant-user-app-roles-create.component.css']
})
export class TenantUserAppRolesCreateComponent implements OnInit {

 
  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private tenantUserAppRolesService: TenantUserAppRolesService,
    private router: Router) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
       tenant_user_app_id: '',
 
       role_id: ''
    });

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.tenantUserAppRolesService.create(this.str).subscribe(
      () => this.router.navigate(['/tenantUserAppRoles'])
    );
  }
}
