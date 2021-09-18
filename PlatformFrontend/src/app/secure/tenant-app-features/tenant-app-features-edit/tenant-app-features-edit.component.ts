import { Router, ActivatedRoute } from '@angular/router';
import { TenantAppFeatureService } from './../../../services/tenant-app-feature.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-app-features-edit',
  templateUrl: './tenant-app-features-edit.component.html',
  styleUrls: ['./tenant-app-features-edit.component.css']
})
export class TenantAppFeaturesEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private tenantService: TenantAppFeatureService,
    private router: Router,
    private route: ActivatedRoute) { }

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

    this.id = parseInt(this.route.snapshot.params.id)

    this.tenantService.get(this.id).subscribe(
      tenant => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
           tenant_app_id:tenant.tenant_app_id,
 
           feature_id:tenant.feature_id
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
      .subscribe(() => this.router.navigate(['/tenantAppFeatures']));
  }

}
