import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './users';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  requestUrl:string='https://webstoreapp.azurewebsites.net';
  constructor(private http:HttpClient) { }
  Login():Observable<any>
  {
    const headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");
    return this.http.get(this.requestUrl+"/api/users");
  }
}
