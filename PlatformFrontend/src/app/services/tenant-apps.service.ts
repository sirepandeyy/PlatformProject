import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TenantAppsService extends RestService{

      
  endpointGet = `${environment.api}/TENANT_APPS`
  endpointRest = `${environment.api}/TENANT_APPS_SERVICE/TENANT_APPS`
}
