import { Router, ActivatedRoute } from '@angular/router';
import { TenantUserAppAlertsService } from './../../../services/tenant-user-app-alerts.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-user-app-alerts-edit',
  templateUrl: './tenant-user-app-alerts-edit.component.html',
  styleUrls: ['./tenant-user-app-alerts-edit.component.css']
})
export class TenantUserAppAlertsEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private tenantUserAppAlertService: TenantUserAppAlertsService,
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
       alert_type: '',
  
       alert_name : '',
       
       alert_desc: '',
       
       from_date_time:new Date,
       
       alert_duration_type: '',
       
       subscription_date: new Date,
       
       has_unsubscribed: '',
       
       tenant_user_app_id: '',
       
       tenant_user_id: '',
       
       user_id: ''
     
    });

    this.id = parseInt(this.route.snapshot.params.id)

    this.tenantUserAppAlertService.get(this.id).subscribe(
      tenant => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
     
       alert_type: tenant.alert_type,
  
       alert_name : tenant.alert_name,
       
       alert_desc: tenant.alert_desc,
       
       from_date_time: tenant.from_date_time,
       
       alert_duration_type: tenant.alert_duration_type,
       
       subscription_date: tenant.subscription_date,
       
       has_unsubscribed: tenant.has_unsubscribed,
       
       tenant_user_app_id: tenant.tenant_user_app_id,
       
       tenant_user_id: tenant.tenant_user_id,
       
       user_id: tenant.user_id
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
    this.tenantUserAppAlertService.update(this.id, this.str)
      .subscribe(() => this.router.navigate(['/tenantUserAppAlerts']));
  }
}
