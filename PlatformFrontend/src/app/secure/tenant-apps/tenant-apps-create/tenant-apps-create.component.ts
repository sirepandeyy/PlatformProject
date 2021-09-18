import { Router } from '@angular/router';
import { TenantAppsService } from './../../../services/tenant-apps.service';
import { TenantApps } from './../../../interfaces/tenantApps';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-apps-create',
  templateUrl: './tenant-apps-create.component.html',
  styleUrls: ['./tenant-apps-create.component.css']
})
export class TenantAppsCreateComponent implements OnInit {

  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private tenantAppService: TenantAppsService,
    private router: Router) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
      
  tenant_id: '',
  
  app_id: '',
  
  connection_string: '',
  
  all_features : ''
     
    });

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.tenantAppService.create(this.str).subscribe(
      () => this.router.navigate(['/tenantApps'])
    );
  }


}
