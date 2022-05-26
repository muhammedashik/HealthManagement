import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient) { }
  user_data:any={};
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  
  public login_user(body:any):Observable<any>{
    this.loggedIn.next(true);
    return this.http.post('//localhost:5000/api/login_user', body)
  }
}
