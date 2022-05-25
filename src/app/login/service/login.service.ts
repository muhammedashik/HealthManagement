import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  user_data:any={};
  public login_user(body:any):Observable<any>{
    return this.http.post('//localhost:5000/api/login_user', body)
  }
}
