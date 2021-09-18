import { TenantUserAppsService } from './../../../services/tenant-user-apps.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TenantUserApp } from './../../../interfaces/tenantUserApps';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-user-apps-edit',
  templateUrl: './tenant-user-apps-edit.component.html',
  styleUrls: ['./tenant-user-apps-edit.component.css']
})
export class TenantUserAppsEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private tenantUserAppService: TenantUserAppsService,
    private router: Router,
    private route: ActivatedRoute) { }

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

    this.id = parseInt(this.route.snapshot.params.id)

    this.tenantUserAppService.get(this.id).subscribe(

      tenantUserApp => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
           tenant_user_id:tenantUserApp.tenant_user_id,
 
           tenant_app_id:tenantUserApp.tenant_app_id,
          
           tenant_user_app_permissions: tenantUserApp.tenant_user_app_permissions
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
    this.tenantUserAppService.update(this.id, this.str)
      .subscribe(() => this.router.navigate(['/tenantUserApps']));
  }


}
