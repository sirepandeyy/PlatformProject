import { Router } from '@angular/router';
import { AppRolesService } from './../../services/app-roles.service';
import { AppRole } from './../../interfaces/appRoles';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-roles',
  templateUrl: './app-roles.component.html',
  styleUrls: ['./app-roles.component.css']
})
export class AppRolesComponent implements OnInit {

  appRoles:AppRole[] = []
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private appService: AppRolesService,private router:Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.appService.all().subscribe(
      (res: any) => {
        this.appRoles = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {

      this.appService.get(id).subscribe(
        (res: any) => {
          this.str.DataCollection = res.DataCollection
          this.str.DataCollection[0].Id = id
        }
      );

      setTimeout(()=>{
        this.appService.delete(id,this.str).subscribe(
          () => this.router.navigate(['/appRoles'])
        );
      },500)
     
    }
  }

}
