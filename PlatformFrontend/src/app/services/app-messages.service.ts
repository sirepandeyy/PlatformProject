import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AppMessagesService extends RestService{
  endpointGet = `${environment.api}/APP_MESSAGES`
  endpointRest = `${environment.api}/APP_MESSAGES_SERVICE/APP_MESSAGES`
}
