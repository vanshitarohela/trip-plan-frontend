import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FlightsComponent } from './Components/flights/flights.component';
import { MainComponent } from './Components/main/main.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SigninComponent } from './Components/signin/signin.component';
import { ListComponent } from './shared-m/components/list/list.component';
import { compileClassMetadata } from '@angular/compiler';
import { ListDetailsComponent } from './shared-m/components/list-details/list-details.component';
import { PaymentComponent } from './Components/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'list/:type',
        component: ListComponent
      },
      {
        path: 'details',
        component: ListDetailsComponent,
      },
      {
        path: 'flights',
        component: FlightsComponent
      },
      {
        path: "payment",
        component: PaymentComponent
      }
    ],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
