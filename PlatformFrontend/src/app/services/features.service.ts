import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService extends RestService{

  endpointGet = `${environment.api}/FEATURES`
  endpointRest = `${environment.api}/FEATURES_SERVICE/FEATURES`
}
