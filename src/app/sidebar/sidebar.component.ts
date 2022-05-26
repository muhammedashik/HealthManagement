import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService} from '../login/service/login.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isLoggedIn$: Observable<boolean> | undefined;
  _credentials ;
  credentialsKey = 'credentials';
  constructor(private logService:LoginService,private router: Router) {const savedCredentials = sessionStorage.getItem(this.credentialsKey) || localStorage.getItem(this.credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    } }

  ngOnInit(): void {
    // this.isLoggedIn$ = this.logService.
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
