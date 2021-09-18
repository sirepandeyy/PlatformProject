import { TenantUserService } from './../../services/tenant-user.service';
import { TenantUser } from './../../interfaces/tenantUsers';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-user',
  templateUrl: './tenant-user.component.html',
  styleUrls: ['./tenant-user.component.css']
})
export class TenantUserComponent implements OnInit {

  tenantUser: TenantUser[] = [];
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private tenantUserService:TenantUserService,private router:Router) {
  }

  ngOnInit(): void {
this.load()
  }

  load(): void {
    this.tenantUserService.all().subscribe(
      (res: any) => {
        this.tenantUser = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {

      this.tenantUserService.get(id).subscribe(
        (res: any) => {
          this.str.DataCollection = res.DataCollection
          this.str.DataCollection[0].Id = id
        }
      );

      setTimeout(()=>{
        this.tenantUserService.delete(id,this.str).subscribe(
          () => this.router.navigate(['/tenantUsers'])
        );
      },500)
    }
  }


}
