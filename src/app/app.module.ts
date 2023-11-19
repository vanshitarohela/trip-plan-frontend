import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './Components/main/main.component';
import { HomeComponent } from './Components/home/home.component';
import { FlightsComponent } from './Components/flights/flights.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './Components/signup/signup.component';
import { SigninComponent } from './Components/signin/signin.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SharedMModule } from './shared-m/shared-m.module';
// import { ListDetailsComponent } from './shared/components/list-details/list-details.component';
import { RouterModule } from '@angular/router';
import { PaymentComponent } from './Components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    FlightsComponent,
    SignupComponent,
    SigninComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedMModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
