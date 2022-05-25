import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SignService } from './service/sign.service';
@Component({
  selector: 'app-signpage',
  templateUrl: './signpage.component.html',
  styleUrls: ['./signpage.component.scss']
})
export class SignpageComponent implements OnInit {
model: any={};

  constructor(private httpService:SignService,private router: Router) { }

  ngOnInit(): void {

  };
  submit(data:any){
    console.log('data', data);
    if(this.model.password == this.model.confirm_password){
      this.httpService.save_signData(data).subscribe(res=>{
        console.log('here',res);
        if(res.auth === true){
          this.router.navigate(['login'], { replaceUrl: true });
        }
        
      },err=>{
        console.log('err',err)
      });
    }else{
      window.alert('Please enter the correct password');
    }
  }

}
