import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TenantUserAppAlertsService extends RestService{

    
  endpointGet = `${environment.api}/TENANT_USER_APP_ALERTS`
  endpointRest = `${environment.api}/TENANT_USER_APP_ALERTS_SERVICE/TENANT_USER_APP_ALERTS`
}
