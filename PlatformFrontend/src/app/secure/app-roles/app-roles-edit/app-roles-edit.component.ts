import { Router, ActivatedRoute } from '@angular/router';
import { AppRolesService } from './../../../services/app-roles.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-roles-edit',
  templateUrl: './app-roles-edit.component.html',
  styleUrls: ['./app-roles-edit.component.css']
})
export class AppRolesEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private appService: AppRolesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
       role_id:'',
       app_id:'',
       app_role_permissions: ''
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
           role_id:app.role_id,
           app_id:app.app_id,
           app_role_permissions: app.app_role_permissions
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
      .subscribe(() => this.router.navigate(['/appRoles']));
  }

}
