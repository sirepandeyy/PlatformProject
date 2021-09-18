import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TenantAppFeatureService extends RestService{
      
  endpointGet = `${environment.api}/TENANT_APP_FEATURES`
  endpointRest = `${environment.api}/TENANT_APP_FEATURES_SERVICE/TENANT_APP_FEATURES`
}
