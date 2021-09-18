import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }


  form: FormGroup;
  constructor(    private formBuilder: FormBuilder,
     private roleService: RoleService,
     private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
      role_name:'',
      role_priviledge:{}
    });

  }

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.roleService.create(this.str).subscribe(
      () => this.router.navigate(['/roles'])
    );
  }

}
