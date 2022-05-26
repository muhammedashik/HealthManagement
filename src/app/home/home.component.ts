import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login/service/login.service';
import { HomeService } from './service/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  credentialsKey = 'credentials';
  _credentials
  constructor(private router: Router, private httploginService:LoginService,private homeService:HomeService) {
    const savedCredentials = sessionStorage.getItem(this.credentialsKey) || localStorage.getItem(this.credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
   }
  
userData = [];
  ngOnInit(): void {
    // console.log(this._credentials);
  }
  dashboard(){
    this.router.navigate(['dashboard'] )
  }
  appointment(){
    this.router.navigate(['appointment'] )
  };
  patientList(){
    this.router.navigate(['patient'] )
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['login'] )
  }
}
