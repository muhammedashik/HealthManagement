import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
model:any={};
  constructor(private httpService:LoginService,private router: Router) { }

  ngOnInit(): void {
  }
  login(data:any){
    this.httpService.login_user(this.model).subscribe(
      res=>{
        console.log('here', res);
        this.httpService.user_data = res.user_data[0];
        if(res.auth == true){

          this.router.navigate(['home'], { replaceUrl: true })
        }else{
          window.alert('Invalid User Name or Password...!!')
        }
      },
      err=>{
        console.log('err', err);
      }
    )

  };
  signup(){
    this.router.navigate(['signpage'], { replaceUrl: true })
  }
}
