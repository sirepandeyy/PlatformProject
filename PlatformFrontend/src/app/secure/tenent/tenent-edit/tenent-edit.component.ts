import { TenantService } from './../../../services/tenant.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tenent-edit',
  templateUrl: './tenent-edit.component.html',
  styleUrls: ['./tenent-edit.component.css']
})
export class TenentEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private tenantService: TenantService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
       tenant_name:'',
       description:'',
       alias:'',
       
       published_from: '',
       
       published_till: '',
       
       is_complete: '',
       
       site_image_url_path: '',
       
       status_id:'',
       
       client_Id: '',
       
       identity_providers_details: '',
       
       tenant_admin_email: ''
     
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
           tenant_name: tenant.tenant_name,
           description: tenant.description,
           alias: tenant.alias,
           
           published_from: tenant.published_from,
           
           published_till: tenant.published_till,
           
           is_complete: tenant.is_complete,
           
           site_image_url_path: tenant.site_image_url_path,
           
           status_id: tenant.status_id,
           
           client_Id: tenant.client_Id,
           
           identity_providers_details: tenant.identity_providers_details,
           
           tenant_admin_email: tenant.tenant_admin_email
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
      .subscribe(() => this.router.navigate(['/tenants']));
  }

}
