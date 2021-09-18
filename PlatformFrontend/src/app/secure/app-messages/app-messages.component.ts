import { Router } from '@angular/router';
import { AppMessagesService } from './../../services/app-messages.service';
import { AppMessage } from './../../interfaces/appMessages';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.css']
})
export class AppMessagesComponent implements OnInit {

  
  appMessages:AppMessage[] = []
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private appService: AppMessagesService,private router:Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.appService.all().subscribe(
      (res: any) => {
        this.appMessages = res.DataCollection;
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
          () => this.router.navigate(['/appMessages'])
        );
      },500)
     
    }
  }

}
