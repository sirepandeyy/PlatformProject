import { Router } from '@angular/router';
import { AppMessagesService } from './../../../services/app-messages.service';
import { AppMessage } from './../../../interfaces/appMessages';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-messages-create',
  templateUrl: './app-messages-create.component.html',
  styleUrls: ['./app-messages-create.component.css']
})
export class AppMessagesCreateComponent implements OnInit {
  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private appService: AppMessagesService,
    private router: Router) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
       user_id: '',
      
       tenant_id: ''
    });

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.appService.create(this.str).subscribe(
      () => this.router.navigate(['/appMessages'])
    );
  }


}
