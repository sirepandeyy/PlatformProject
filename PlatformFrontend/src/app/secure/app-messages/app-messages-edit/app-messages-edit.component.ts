import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppMessagesService } from 'src/app/services/app-messages.service';

@Component({
  selector: 'app-app-messages-edit',
  templateUrl: './app-messages-edit.component.html',
  styleUrls: ['./app-messages-edit.component.css']
})
export class AppMessagesEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private appService: AppMessagesService,
    private router: Router,
    private route: ActivatedRoute) { }

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

    this.id = parseInt(this.route.snapshot.params.id)

    this.appService.get(this.id).subscribe(
      app => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
           user_id: app.user_id,
      
       tenant_id: app.tenant_id
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
      .subscribe(() => this.router.navigate(['/appMessages  ']));
  }


}
