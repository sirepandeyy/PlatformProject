import { Router } from '@angular/router';
import { TenantAppFeatureService } from './../../services/tenant-app-feature.service';
import { TenantAppFeatures } from './../../interfaces/tenantAppFeatures';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-app-features',
  templateUrl: './tenant-app-features.component.html',
  styleUrls: ['./tenant-app-features.component.css']
})
export class TenantAppFeaturesComponent implements OnInit {
  
  tenantAppFeatures: TenantAppFeatures[] = [];
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private tenentService:TenantAppFeatureService,private router:Router) {
  }

  ngOnInit(): void {
this.load()
  }

  load(): void {
    this.tenentService.all().subscribe(
      (res: any) => {
        this.tenantAppFeatures = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {

      this.tenentService.get(id).subscribe(
        (res: any) => {
          this.str.DataCollection = res.DataCollection
          this.str.DataCollection[0].Id = id
        }
      );

      setTimeout(()=>{
        this.tenentService.delete(id,this.str).subscribe(
          () => this.router.navigate(['/tenantAppFeatures'])
        );
      },500)
    }
    }
  }

