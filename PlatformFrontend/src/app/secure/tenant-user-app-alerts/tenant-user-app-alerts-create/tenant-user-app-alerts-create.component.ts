import { TenantUserAppAlertsService } from './../../../services/tenant-user-app-alerts.service';
import { Router } from '@angular/router';
import { TenantUserAppAlerts } from './../../../interfaces/tenantUserAppAlerts';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-user-app-alerts-create',
  templateUrl: './tenant-user-app-alerts-create.component.html',
  styleUrls: ['./tenant-user-app-alerts-create.component.css']
})
export class TenantUserAppAlertsCreateComponent implements OnInit {

  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private tenantUserAppAlertService: TenantUserAppAlertsService,
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

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.tenantUserAppAlertService.create(this.str).subscribe(
      () => this.router.navigate(['/tenantUserAppAlerts'])
    );
  }


}
