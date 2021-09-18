import { TenantService } from './../../../services/tenant.service';
import { RoleService } from './../../../services/role.service';
import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { User } from './../../../interfaces/user';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenent-create',
  templateUrl: './tenent-create.component.html',
  styleUrls: ['./tenent-create.component.css']
})
export class TenentCreateComponent implements OnInit {

  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private tenantService: TenantService,
    private router: Router) { }


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

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.tenantService.create(this.str).subscribe(
      () => this.router.navigate(['/tenants'])
    );
  }

}


