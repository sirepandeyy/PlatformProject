import { Router } from '@angular/router';
import { TenantUserAppAlerts } from './../../interfaces/tenantUserAppAlerts';
import { Component, OnInit } from '@angular/core';
import { TenantUserAppAlertsService } from 'src/app/services/tenant-user-app-alerts.service';

@Component({
  selector: 'app-tenant-user-app-alerts',
  templateUrl: './tenant-user-app-alerts.component.html',
  styleUrls: ['./tenant-user-app-alerts.component.css']
})
export class TenantUserAppAlertsComponent implements OnInit {
  
  tenantUserAppAlerts: TenantUserAppAlerts[] = [];
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private tenantUserAppAlertService:TenantUserAppAlertsService,private router:Router) {
  }

  ngOnInit(): void {
this.load()
  }

  load(): void {
    this.tenantUserAppAlertService.all().subscribe(
      (res: any) => {
        this.tenantUserAppAlerts = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {

      this.tenantUserAppAlertService.get(id).subscribe(
        (res: any) => {
          this.str.DataCollection = res.DataCollection
          this.str.DataCollection[0].Id = id
        }
      );

      setTimeout(()=>{
        this.tenantUserAppAlertService.delete(id,this.str).subscribe(
          () => this.router.navigate(['/tenantUserAppAlerts'])
        );
      },500)
    }
  }

}
