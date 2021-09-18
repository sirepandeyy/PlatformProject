import { Router, ActivatedRoute } from '@angular/router';
import { TenantUserService } from './../../../services/tenant-user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-user-edit',
  templateUrl: './tenant-user-edit.component.html',
  styleUrls: ['./tenant-user-edit.component.css']
})
export class TenantUserEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private tenantUserService: TenantUserService,
    private router: Router,
    private route: ActivatedRoute) { }

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

    this.id = parseInt(this.route.snapshot.params.id)

    this.tenantUserService.get(this.id).subscribe(
      tenantUser => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
           tenant_id: tenantUser.tenant_id,

       user_id: tenantUser.user_id,
       
       identity_provider_subscriber_id: tenantUser.identity_provider_subscriber_id
       
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
    this.tenantUserService.update(this.id, this.str)
      .subscribe(() => this.router.navigate(['/tenantUser']));
  }

}
