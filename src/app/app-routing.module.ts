import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SigninComponent } from './Components/signin/signin.component';
import { ListComponent } from './shared-m/components/list/list.component';
import { ListDetailsComponent } from './shared-m/components/list-details/list-details.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { WeatherComponent } from './Components/weather/weather.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { PackagesComponent } from './Components/packages/packages.component';

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
        path: 'packages',
        component: PackagesComponent
      },
      {
        path: 'weather',
        component: WeatherComponent
      },
      {
        path: "payment",
        component: PaymentComponent
      },
      {
        path: "profile",
        component: ProfileComponent
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
