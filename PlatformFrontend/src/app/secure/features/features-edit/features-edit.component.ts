import { Router, ActivatedRoute } from '@angular/router';
import { FeaturesService } from './../../../services/features.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-edit',
  templateUrl: './features-edit.component.html',
  styleUrls: ['./features-edit.component.css']
})
export class FeaturesEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private featureService: FeaturesService,
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
 
       feature_name: '',
    
       app_id: '',
    
       base_feature_id: '',
    
       feature_description : '',
    
       feature_key : '',
    
       operations :'',
    
       feature_type : '',
     
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
 
           feature_name: feature.feature_name,
        
           app_id: feature.app_id,
        
           base_feature_id: feature.base_feature_id,
        
           feature_description : feature.feature_description,
        
           feature_key : feature.feature_key,
        
           operations : feature.operations,
        
           feature_type : feature.feature_type
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
      .subscribe(() => this.router.navigate(['/features']));
  }

}
