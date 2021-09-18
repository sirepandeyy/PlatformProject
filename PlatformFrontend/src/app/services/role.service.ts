import { User } from './../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends RestService {

  endpointGet = `${environment.api}/ROLES`
  endpointRest = `${environment.api}/ROLES_SERVICE/ROLES`
}
