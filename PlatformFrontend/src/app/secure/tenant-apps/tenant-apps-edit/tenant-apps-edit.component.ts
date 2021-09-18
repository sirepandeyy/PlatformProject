import { Router, ActivatedRoute } from '@angular/router';
import { TenantAppsService } from './../../../services/tenant-apps.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-apps-edit',
  templateUrl: './tenant-apps-edit.component.html',
  styleUrls: ['./tenant-apps-edit.component.css']
})
export class TenantAppsEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private tenantService: TenantAppsService,
    private router: Router,
    private route: ActivatedRoute) { }

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

    this.id = parseInt(this.route.snapshot.params.id)

    this.tenantService.get(this.id).subscribe(
      tenant => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
                
  tenant_id: tenant.tenant_id,
  
  app_id: tenant.app_id,
  
  connection_string: tenant.connection_string,
  
  all_features : tenant.all_features
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
    this.tenantService.update(this.id, this.str)
      .subscribe(() => this.router.navigate(['/tenantApps']));
  }

}
