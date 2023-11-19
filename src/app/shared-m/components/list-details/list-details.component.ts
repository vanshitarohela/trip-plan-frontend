import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Restaurant } from '../../model/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessesService } from '../../services/restaurants and hotels/processes.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
})
export class ListDetailsComponent {
  itemId: string = '';
  images: String[] = [];
  itemDetails!: Restaurant;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProcessesService
  ) {
    // const restaurant = this.route.snapshot.paramMap.getAll('location');
    // console.log(restaurant);
    // console.log(history.state);
    this.itemDetails = history.state.restaurant;

    // this.itemDetails =
    //   this.router.getCurrentNavigation()?.extras.state?.['restaurant'];
    // console.log(this.router.getCurrentNavigation());

    // console.log(this.router.getCurrentNavigation()?.extras.state?['restaurant']);
    // console.log(this.itemDetails);

    // const restaurantId = this.router.getCurrentNavigation()?.extras?.state?.['restaurant'].id;
  }

  // ngOnChanges() {}

  ind = 0;

  goPrev() {
    this.ind =
      (this.itemDetails.images.length + (this.ind - 1)) %
      this.itemDetails.images.length;
    console.log(this.ind);
  }

  goNext() {
    this.ind = (this.ind + 1) % this.itemDetails.images.length;
    console.log(this.ind);
  }

  goToLink(link: string | undefined) {
    if (link) 
      window.open(link, '_blank');
  }

  viewDetails(restaurant: Restaurant) {
    this.router.navigate([`../payment`], {state: {restaurant: restaurant}})
    // TODO
  }
}
