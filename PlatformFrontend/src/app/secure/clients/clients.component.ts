import { ClientService } from './../../services/client.service';
import { Client } from './../../interfaces/clients';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:Client[] = []
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private clientService: ClientService,private router:Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.clientService.all().subscribe(
      (res: any) => {
        this.clients = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {

      this.clientService.get(id).subscribe(
        (res: any) => {
          this.str.DataCollection = res.DataCollection
          this.str.DataCollection[0].Id = id
        }
      );

      setTimeout(()=>{
        this.clientService.delete(id,this.str).subscribe(
          () => this.router.navigate(['/clients'])
        );
      },500)
     
    }
  }

}
