import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TenantService extends RestService {

  endpointGet = `${environment.api}/TENANTS`
  endpointRest = `${environment.api}/TENANTS_SERVICE/TENANTS`
}
