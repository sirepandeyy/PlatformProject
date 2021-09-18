import { Router } from '@angular/router';
import { FeaturesService } from './../../services/features.service';
import { Feature } from './../../interfaces/features';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
 
  features: Feature[] = [];
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private featureService:FeaturesService,private router:Router) {
  }

  ngOnInit(): void {
this.load()
  }

  load(): void {
    this.featureService.all().subscribe(
      (res: any) => {
        this.features = res.DataCollection;
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
          () => this.router.navigate(['/features'])
        );
      },500)
    }
  }

}
