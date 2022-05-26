import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient/service/patient.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  patientList:any={}
  TodayAppoinmentList :any ={}
  credentialsKey ='credentials';
  _credentials;
  constructor(private patientService:PatientService) {const savedCredentials = sessionStorage.getItem(this.credentialsKey)
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }  }

  ngOnInit(): void {
    this.patientService.getPatientData(this._credentials[0].id).subscribe(res=>{
      console.log('data',res.message[0]);
      this.patientList = res.message[0];
    })
    this.patientService.getTodayAppoinmentList(this._credentials[0].id).subscribe(res=>{
      console.log('data',res.message[0]);
      this.TodayAppoinmentList = res.message[0];
    })
  }

}
