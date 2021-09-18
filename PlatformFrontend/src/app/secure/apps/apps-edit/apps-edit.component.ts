import { Router, ActivatedRoute } from '@angular/router';
import { AppsService } from './../../../services/apps.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps-edit',
  templateUrl: './apps-edit.component.html',
  styleUrls: ['./apps-edit.component.css']
})
export class AppsEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private appService: AppsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
       app_name:'',
    
       app_description:''
    });

    this.id = parseInt(this.route.snapshot.params.id)

    this.appService.get(this.id).subscribe(
      app => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
           app_name:app.app_name,
    
           app_description:app.app_description
        });
      }
    );

   
         
       


  }
  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.str.DataCollection[0].Id = this.id
    console.log(this.str)
    this.appService.update(this.id, this.str)
      .subscribe(() => this.router.navigate(['/apps']));
  }

}
