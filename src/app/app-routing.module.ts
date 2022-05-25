import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignpageComponent } from './signpage/signpage.component';
import { LoginComponent } from './login/login.component';
import { SignService } from './signpage/service/sign.service';
import {HomeComponent } from './home/home.component';
import { PatientComponent} from './patient/patient.component';
import {DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
const routes: Routes = [
  {
    path: 'signpage',
    component: SignpageComponent,
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'patient',
    component:PatientComponent
  },
  {
    path:'appointment',
    component:AppointmentComponent
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SignService],
})
export class AppRoutingModule { }
