import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends RestService{

    endpointGet = `${environment.api}/CLIENTS`
    endpointRest = `${environment.api}/CLIENTS_SERVICE/CLIENTS`
  }

