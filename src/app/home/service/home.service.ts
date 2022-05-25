import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  public getuserData(id:number):Observable<any>{
    console.log('id',id)
    let Params = new HttpParams();
    Params = Params.append('id',id );
    return this.http.get('//localhost:5000/api/getUserData',{ params: Params })
  }

}
