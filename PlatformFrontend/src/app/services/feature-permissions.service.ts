import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class FeaturePermissionsService extends RestService{


  endpointGet = `${environment.api}/FEATURE_PERMISSION`
  endpointRest = `${environment.api}/FEATURE_PERMISSION_SERVICE/FEATURES`
}
