import { Router } from '@angular/router';
import { AppsService } from './../../services/apps.service';
import { App } from './../../interfaces/apps';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  apps:App[] = []
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private appService: AppsService,private router:Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.appService.all().subscribe(
      (res: any) => {
        this.apps = res.DataCollection;
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
          () => this.router.navigate(['/apps'])
        );
      },500)
     
    }
  }

}
