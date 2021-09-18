import { TenantUserAppsService } from './../../services/tenant-user-apps.service';
import { TenantUserApp } from './../../interfaces/tenantUserApps';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-user-apps',
  templateUrl: './tenant-user-apps.component.html',
  styleUrls: ['./tenant-user-apps.component.css']
})
export class TenantUserAppsComponent implements OnInit {

  tenantUserApps: TenantUserApp[] = [];
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private tenantUserAppService:TenantUserAppsService, private router:Router) {}

  ngOnInit(): void {
this.load()
  }

  load(): void {
    this.tenantUserAppService.all().subscribe(
      (res: any) => {
        this.tenantUserApps = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {

      this.tenantUserAppService.get(id).subscribe(
        (res: any) => {
          this.str.DataCollection = res.DataCollection
          this.str.DataCollection[0].Id = id
          console.log(id)
        }
      );

      setTimeout(()=>{
        this.tenantUserAppService.delete(id,this.str).subscribe(
          () => this.router.navigate(['/tenantUserApps'])
        );
      },500)
    }
  }


}
