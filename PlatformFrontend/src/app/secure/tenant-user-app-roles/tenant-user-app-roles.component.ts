import { TenantUserAppRolesService } from './../../services/tenant-user-app-roles.service';
import { Router } from '@angular/router';
import { TenantUserAppRoles } from './../../interfaces/tenantUserAppRoles';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-user-app-roles',
  templateUrl: './tenant-user-app-roles.component.html',
  styleUrls: ['./tenant-user-app-roles.component.css']
})
export class TenantUserAppRolesComponent implements OnInit {
  
  tenantUserAppRoles: TenantUserAppRoles[] = [];
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private tenantUserAppRolesService:TenantUserAppRolesService,private router:Router) {
  }

  ngOnInit(): void {
this.load()
  }

  load(): void {
    this.tenantUserAppRolesService.all().subscribe(
      (res: any) => {
        this.tenantUserAppRoles = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {

      this.tenantUserAppRolesService.get(id).subscribe(
        (res: any) => {
          this.str.DataCollection = res.DataCollection
          this.str.DataCollection[0].Id = id
        }
      );

      setTimeout(()=>{
        this.tenantUserAppRolesService.delete(id,this.str).subscribe(
          () => this.router.navigate(['/tenantUserAppRoles'])
        );
      },500)
    }
  }


}
