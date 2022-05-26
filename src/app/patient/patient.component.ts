import { Component, OnInit } from '@angular/core';
import { PatientService } from './service/patient.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  visible : number =1;
  model:any={};
  credentialsKey ='credentials';
  _credentials;
  patientList:any={};
  modalRef: any = BsModalRef;
  monthly_checkUp : any={}
  constructor(private patientService:PatientService,private modalService: BsModalService) {const savedCredentials = sessionStorage.getItem(this.credentialsKey)
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    } }

  ngOnInit(): void {
    this.getPatientList()
  }
  getPatientList(){
    this.patientService.getPatientData(this._credentials[0].id).subscribe(res=>{
      console.log('data',res.message[0]);
      this.patientList = res.message[0];
    })
  }
submit(){
  this.model.user_id = this._credentials[0].id
  this.patientService.saveData(this.model).subscribe(res=>{
    console.log('res',res);
  })
  this.getPatientList()
};
view(template:any,data:any){
 
  this.monthly_checkUp = data;
  console.log('p',this.monthly_checkUp)
  this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg modal-xl', ignoreBackdropClick: true }));
}
}
