import { TenantAppFeatureService } from './../../../services/tenant-app-feature.service';
import { Router } from '@angular/router';
import { TenantAppFeatures } from './../../../interfaces/tenantAppFeatures';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-app-features-create',
  templateUrl: './tenant-app-features-create.component.html',
  styleUrls: ['./tenant-app-features-create.component.css']
})
export class TenantAppFeaturesCreateComponent implements OnInit {

  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private tenantService: TenantAppFeatureService,
    private router: Router) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,

       tenant_app_id:'',
 
       feature_id:''
     
    });

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.tenantService.create(this.str).subscribe(
      () => this.router.navigate(['/tenantAppFeatures'])
    );
  }


}
