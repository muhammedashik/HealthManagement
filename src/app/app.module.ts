import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignpageComponent } from './signpage/signpage.component';
import { LoginComponent } from './login/login.component';
import {
  HttpClientModule,
  HttpClient,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientComponent } from './patient/patient.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { AvatarModule } from 'ngx-avatar';
import { PatientService } from './patient/service/patient.service';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    SignpageComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    AppointmentComponent,
    PatientComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    AvatarModule,
    CalendarModule,
    BrowserAnimationsModule,
  ],
  providers: [BsModalService,PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
