import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private http: HttpClient) { }

  public save_signData(body:any):Observable<any>{
    return this.http.post('//localhost:5000/api/saveSignDAta',body)
  }
}
