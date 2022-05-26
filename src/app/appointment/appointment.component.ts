import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient/service/patient.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  todayAppoinmentList :any ={}
  credentialsKey ='credentials';
  _credentials;
  visible:number=1;
  date = new Date();
  constructor(private patientService:PatientService) {const savedCredentials = sessionStorage.getItem(this.credentialsKey)
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }  }

  ngOnInit(): void {
    this.patientService.getTodayAppoinmentList(this._credentials[0].id).subscribe(res=>{
      console.log('data',res.message[0]);
      this.todayAppoinmentList = res.message[0];
    })
  }

}
