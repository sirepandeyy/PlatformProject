import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TenantUserAppsService extends RestService{
  
  endpointGet = `${environment.api}/TENANT_USER_APPS`
  endpointRest = `${environment.api}/TENANT_USER_APPS_SERVICE/TENANT_USER_APPS`
}
