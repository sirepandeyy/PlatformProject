import { User } from './../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected http: HttpClient) {
  }

  login(data:any): Observable<any> {
    return this.http.post(`${environment.api}/login`, data);
  }

  register(data:any): Observable<any> {
    return this.http.post<User>(`${environment.api}/auth/register`, data);
  }

  // user(): Observable<User> {
  //   return this.http.get<User>(`${environment.api}/user`);
  // }

  logout(): Observable<void> {
    return this.http.post<void>(`${environment.api}/logout`, {});
  }

  updateInfo(data:any): Observable<User> {
    return this.http.put<User>(`${environment.api}/users/info`, data);
  }

  updatePassword(data:any): Observable<User> {
    return this.http.put<User>(`${environment.api}/users/password`, data);
  }
}

