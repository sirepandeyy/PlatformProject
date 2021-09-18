import { Router, ActivatedRoute } from '@angular/router';
import { TenantUserAppRolesService } from './../../../services/tenant-user-app-roles.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-user-app-roles-edit',
  templateUrl: './tenant-user-app-roles-edit.component.html',
  styleUrls: ['./tenant-user-app-roles-edit.component.css']
})
export class TenantUserAppRolesEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private tenantUserAppRolesService: TenantUserAppRolesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
       tenant_user_app_id:'',
 
  role_id: ''
     
    });

    this.id = parseInt(this.route.snapshot.params.id)

    this.tenantUserAppRolesService.get(this.id).subscribe(
      tenantUserAppRoles => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
           tenant_user_app_id: tenantUserAppRoles.tenant_user_app_id,

           role_id: tenantUserAppRoles.role_id
         
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
    this.tenantUserAppRolesService.update(this.id, this.str)
      .subscribe(() => this.router.navigate(['/tenantUserAppRoles']));
  }
}
