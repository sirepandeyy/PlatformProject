import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TenantUserService extends RestService {

  
  endpointGet = `${environment.api}/TENANT_USERS`
  endpointRest = `${environment.api}/TENANT_USERS_SERVICE/TENANT_USERS`
}
