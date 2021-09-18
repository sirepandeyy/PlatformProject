import { Router } from '@angular/router';
import { User } from './../../interfaces/user';
import { TenantService } from './../../services/tenant.service';
import { Tenant } from './../../interfaces/tenant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenent',
  templateUrl: './tenent.component.html',
  styleUrls: ['./tenent.component.css']
})
export class TenentComponent implements OnInit {
  
  tenants: Tenant[] = [];
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private tenentService:TenantService,private router:Router) {
  }

  ngOnInit(): void {
this.load()
  }

  load(): void {
    this.tenentService.all().subscribe(
      (res: any) => {
        this.tenants = res.DataCollection;
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
          () => this.router.navigate(['/tenants'])
        );
      },500)
    }
  }

}
