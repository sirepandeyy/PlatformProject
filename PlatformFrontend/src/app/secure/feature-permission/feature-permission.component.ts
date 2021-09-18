import { FeaturePermissionsService } from './../../services/feature-permissions.service';
import { Router } from '@angular/router';
import { FeaturePermission } from './../../interfaces/featurePermission';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-permission',
  templateUrl: './feature-permission.component.html',
  styleUrls: ['./feature-permission.component.css']
})
export class FeaturePermissionComponent implements OnInit {
 
  featurePermissions: FeaturePermission[] = [];
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private featureService:FeaturePermissionsService,private router:Router) {
  }

  ngOnInit(): void {
this.load()
  }

  load(): void {
    this.featureService.all().subscribe(
      (res: any) => {
        this.featureService = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {

      this.featureService.get(id).subscribe(
        (res: any) => {
          this.str.DataCollection = res.DataCollection
          this.str.DataCollection[0].Id = id
        }
      );

      setTimeout(()=>{
        this.featureService.delete(id,this.str).subscribe(
          () => this.router.navigate(['/featurePermissions'])
        );
      },500)
    }
    }
  }


