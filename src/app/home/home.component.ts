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

  constructor(private router: Router, private httploginService:LoginService,private homeService:HomeService) { }
userData = [];
  ngOnInit(): void {
    console.log(this.httploginService.user_data[0].id);
    
      this.homeService.getuserData(this.httploginService.user_data[0].id).subscribe(res=>{
        this.userData = res.message[0];
        console.log('user ',res,this.userData)
      })
   
    
    
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
}
