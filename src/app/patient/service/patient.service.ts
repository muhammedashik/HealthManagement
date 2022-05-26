import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }
  public saveData(body:any):Observable<any>{
    return this.http.post('//localhost:5000/api/saveDataPatient',body)
  }

  public getPatientData(id:number):Observable<any>{
    let Params = new HttpParams();
    Params = Params.append('id',id );
    return this.http.get('//localhost:5000/api/getPatientDetails',{params:Params})
  }
  public getTodayAppoinmentList(id:number):Observable<any>{
    let Params = new HttpParams();
    Params = Params.append('id',id );
    return this.http.get('//localhost:5000/api/getTodayAppoinmentList',{params:Params})
  }
}
