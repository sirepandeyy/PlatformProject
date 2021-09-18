import { Router } from '@angular/router';
import { TenantAppsService } from './../../services/tenant-apps.service';
import { TenantApps } from './../../interfaces/tenantApps';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-apps',
  templateUrl: './tenant-apps.component.html',
  styleUrls: ['./tenant-apps.component.css']
})
export class TenantAppsComponent implements OnInit {

   
  tenantApps: TenantApps[] = [];
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private tenantAppService:TenantAppsService,private router:Router) {
  }

  ngOnInit(): void {
this.load()
  }

  load(): void {
    this.tenantAppService.all().subscribe(
      (res: any) => {
        this.tenantApps = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {

      this.tenantAppService.get(id).subscribe(
        (res: any) => {
          this.str.DataCollection = res.DataCollection
          this.str.DataCollection[0].Id = id
        }
      );

      setTimeout(()=>{
        this.tenantAppService.delete(id,this.str).subscribe(
          () => this.router.navigate(['/tenantApps'])
        );
      },500)
    }
  }
}
