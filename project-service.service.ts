import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccount } from './user-account';
@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private http:HttpClient) { }

  createAccount(newuser :UserAccount):Observable<UserAccount>{
   
    console.log(newuser);
    return this.http.post<UserAccount>("http://localhost:5020/api/create-account",newuser);
  }
  getUserId(password:string):Observable<number>{
    return this.http.get<number>("http://localhost:5020/api"+"/"+password);
  }
}
