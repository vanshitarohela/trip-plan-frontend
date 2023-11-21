import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/shared-m/model/interfaces';
declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  itemDetails?: Restaurant;
  startDate?: Date;
  endDate?: Date;
  days = 1;
  price = 0;

  constructor(private router: Router) {
    // this.itemDetails = history.state.restaurant;
    var res = localStorage.getItem('restaurantPayment');
    if (res) {
      this.itemDetails = JSON.parse(res);
      if (this.itemDetails)
        this.price = Math.round(
          (this.days * this.itemDetails.price * 100) / 100
        );
    }
  }

  onChange(event: any) {
    if (event.target.id === 'startDate' && event.target.value) {
      this.startDate = new Date(event.target.value);
    } else if (event.target.id === 'endDate' && event.target.value) {
      this.endDate = new Date(event.target.value);
    }

    if (this.startDate && this.endDate) {
      if (this.startDate < this.endDate) {
        this.days =
          (this.endDate.getTime() - this.startDate.getTime()) /
          (1000 * 3600 * 24);

        if (this.itemDetails)
          this.price = Math.round(
            (this.days * this.itemDetails.price * 100) / 100
          );
      }
    }
  }  

  payNow() {
    const successCallback = (paymentid: any) => {
      console.log(paymentid);
      alert('Booking confirmed!');
      this.router.navigate(['/home']);
      localStorage.removeItem('restaurantPayment')
    };
    const RozarpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: (this.price + 150) * 100,
      name: 'Trip Planner',
      key: 'rzp_test_WyLkfRfd5Xz0yF',
      image: 'https://i.imgur.com/FApqk3D.jpeg',
      prefill: {
        name: 'Vansh',
        email: 'va@gmail.com',
        phone: '9999999999',
      },
      theme: {
        color: '#6466e3',
      },
      handler: successCallback,
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        },
      },
    };    

    const failureCallback = (e: any) => {
      console.log(e);
    };

    Razorpay.open(RozarpayOptions, successCallback, failureCallback);
  }
}
