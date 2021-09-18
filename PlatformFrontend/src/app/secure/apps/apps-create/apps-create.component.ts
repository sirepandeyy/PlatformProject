import { Router } from '@angular/router';
import { AppsService } from './../../../services/apps.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps-create',
  templateUrl: './apps-create.component.html',
  styleUrls: ['./apps-create.component.css']
})
export class AppsCreateComponent implements OnInit {

  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private appService: AppsService,
    private router: Router) { }


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

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.appService.create(this.str).subscribe(
      () => this.router.navigate(['/apps'])
    );
  }
}
