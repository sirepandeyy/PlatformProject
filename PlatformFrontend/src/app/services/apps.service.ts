import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AppsService extends RestService{

  endpointGet = `${environment.api}/APPS`
  endpointRest = `${environment.api}/APPS_SERVICE/APPS`
}
