import { Router } from '@angular/router';
import { FeaturesService } from './../../../services/features.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-create',
  templateUrl: './features-create.component.html',
  styleUrls: ['./features-create.component.css']
})
export class FeaturesCreateComponent implements OnInit {

  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor( private formBuilder: FormBuilder,
    private featureService: FeaturesService,
    private router: Router) { }


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

  }  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.featureService.create(this.str).subscribe(
      () => this.router.navigate(['/features'])
    );
  }


}
