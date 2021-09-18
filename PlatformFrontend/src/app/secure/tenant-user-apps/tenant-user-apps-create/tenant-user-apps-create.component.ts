import { TenantUserAppsService } from './../../../services/tenant-user-apps.service';
import { Router } from '@angular/router';
import { TenantUserApp } from './../../../interfaces/tenantUserApps';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-user-apps-create',
  templateUrl: './tenant-user-apps-create.component.html',
  styleUrls: ['./tenant-user-apps-create.component.css']
})
export class TenantUserAppsCreateComponent implements OnInit {

  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private tenantUserAppService: TenantUserAppsService,
    private router: Router) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
       tenant_user_id:'',
 
  tenant_app_id:'',
 
  tenant_user_app_permissions: ''
  
     
    });

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.tenantUserAppService.create(this.str).subscribe(
      () => this.router.navigate(['/tenantUserApps'])
    );
  }

}
