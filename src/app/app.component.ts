import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/service/login.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  id:number = 0;
  _credentials ;
  credentialsKey = 'credentials';
  constructor(private logService:LoginService) {const savedCredentials = sessionStorage.getItem(this.credentialsKey) || localStorage.getItem(this.credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    } }
  ngOnInit(): void {
    console.log('load',this._credentials)
  }
  title = 'client';
  // sessionStorage.removeItem("key");
}
