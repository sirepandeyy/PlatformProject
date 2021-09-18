import { Router, ActivatedRoute } from '@angular/router';
import { FeaturePermissionsService } from './../../../services/feature-permissions.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-permission-edit',
  templateUrl: './feature-permission-edit.component.html',
  styleUrls: ['./feature-permission-edit.component.css']
})
export class FeaturePermissionEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private featureService: FeaturePermissionsService,
    private router: Router,
    private route: ActivatedRoute) { }

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

    this.id = parseInt(this.route.snapshot.params.id)

    this.featureService.get(this.id).subscribe(
      feature => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
           feature_id: feature.feature_id,
 
           operation_permitted: feature.operation_permitted,
           
           role_id: feature.role_id,
        
           user_id: feature.user_id,
        
           role_feature_security : feature.role_feature_security
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
    this.featureService.update(this.id, this.str)
      .subscribe(() => this.router.navigate(['/featurePermissions']));
  }
}
