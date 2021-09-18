import { ClientService } from './../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  styleUrls: ['./clients-edit.component.css']
})
export class ClientsEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor( private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
     
address_id: '',
start_date: '',
expiry_date: '' ,

client_key:'',

client_name:'',

description: '',

contact_id:''
    });

    this.id = parseInt(this.route.snapshot.params.id)

    this.clientService.get(this.id).subscribe(
      client => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
         
address_id: client.address_id,
start_date:client.start_date ,
expiry_date: client.expiry_date,

client_key :client.client_key ,

client_name:client.client_name ,

description: client.description,

contact_id :client.contact_id
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
    this.clientService.update(this.id, this.str)
      .subscribe(() => this.router.navigate(['/clients']));
  }

}
