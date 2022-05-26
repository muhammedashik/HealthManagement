import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
model:any={};
loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpService:LoginService,private router: Router) { }
 credentialsKey = 'credentials';
  ngOnInit(): void {
  }
  login(){
    this.httpService.login_user(this.model).subscribe(
      res=>{
        console.log('here', res);
        this.httpService.user_data = res.user_data[0];
        if(res.auth == true){
          this.setuserData(res.user_data[0])
          this.loggedIn.next(true)
          this.router.navigate(['dashboard'], { replaceUrl: true })
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
  };
  setuserData(user_data:any){
    console.log(user_data);
    if (user_data) {
      const storage = sessionStorage;
      storage.setItem(this.credentialsKey, JSON.stringify(user_data));
    } else {
      sessionStorage.removeItem(this.credentialsKey);
      localStorage.removeItem(this.credentialsKey);
    }
  }
}
