import { Router } from '@angular/router';
import { FeaturePermissionsService } from './../../../services/feature-permissions.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-permission-create',
  templateUrl: './feature-permission-create.component.html',
  styleUrls: ['./feature-permission-create.component.css']
})
export class FeaturePermissionCreateComponent implements OnInit {

  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private featureService: FeaturePermissionsService,
    private router: Router) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
       feature_id: '',
 
       operation_permitted: {},
       
       role_id: '',
    
       user_id: '',
    
       role_feature_security : {}
     
    });

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.featureService.create(this.str).subscribe(
      () => this.router.navigate(['/featurePermissions'])
    );
  }


}
