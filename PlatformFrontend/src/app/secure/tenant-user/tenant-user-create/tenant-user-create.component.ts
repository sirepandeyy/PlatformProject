import { Router } from '@angular/router';
import { TenantUserService } from './../../../services/tenant-user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tenant-user-create',
  templateUrl: './tenant-user-create.component.html',
  styleUrls: ['./tenant-user-create.component.css']
})
export class TenantUserCreateComponent implements OnInit {

  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private tenantUserService: TenantUserService,
    private router: Router) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
       tenant_id:'',

       user_id: '',
       
       identity_provider_subscriber_id: ''
       
     
    });

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.tenantUserService.create(this.str).subscribe(
      () => this.router.navigate(['/tenantUsers'])
    );
  }
}
